import { NextResponse } from 'next/server'
import newsPool from '../../../../../scripts/news-pool.json'

export async function GET(request: Request) {
  // Verify Vercel cron secret
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN
  const REPO = 'cagatayerdal11/lemars-consulting'
  const FILE_PATH = 'src/data/news.json'

  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GITHUB_TOKEN not configured' }, { status: 500 })
  }

  try {
    // 1. Read current news.json from GitHub
    const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    let currentNews = { articles: [] as Record<string, unknown>[] }
    let fileSha = ''

    if (fileRes.ok) {
      const fileData = await fileRes.json()
      fileSha = fileData.sha
      const content = Buffer.from(fileData.content, 'base64').toString('utf-8')
      currentNews = JSON.parse(content)
    }

    // 2. Check if already published today
    const today = new Date().toISOString().split('T')[0]
    const alreadyPublished = currentNews.articles.some(
      (a: Record<string, unknown>) => a.date === today
    )

    if (alreadyPublished) {
      return NextResponse.json({ message: `Already published for ${today}` })
    }

    // 3. Pick 2 articles from pool that haven't been used
    const publishedPoolIds = new Set(
      currentNews.articles
        .map((a: Record<string, unknown>) => a.poolId)
        .filter(Boolean)
    )

    let available = newsPool.articles.filter(
      (a: { poolId: string }) => !publishedPoolIds.has(a.poolId)
    )

    if (available.length < 2) {
      // Reset pool - start from beginning
      available = newsPool.articles.slice(0, 2)
    }

    const todayArticles = available.slice(0, 2).map(
      (article: Record<string, unknown>, i: number) => ({
        ...article,
        id: `${today}-${i + 1}`,
        date: today,
      })
    )

    // 4. Merge and keep last 90 articles
    const merged = [...todayArticles, ...currentNews.articles].slice(0, 90)
    const updatedContent = JSON.stringify({ articles: merged }, null, 2)

    // 5. Commit updated news.json to GitHub
    const updateRes = await fetch(
      `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `chore: publish daily news for ${today} [automated]`,
          content: Buffer.from(updatedContent).toString('base64'),
          sha: fileSha,
        }),
      }
    )

    if (!updateRes.ok) {
      const err = await updateRes.json()
      return NextResponse.json({ error: err.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      date: today,
      published: todayArticles.length,
      total: merged.length,
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
