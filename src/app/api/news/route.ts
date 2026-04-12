import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const CATEGORIES = [
  'Facility Management',
  'Corporate Catering & Food Safety',
  'Employee Transportation',
  'Corporate Travel Management',
  'Vendor Management & Procurement',
  'Digital Transformation in Admin Affairs',
]

export async function GET() {
  try {
    const newsFile = await import('@/data/news.json').catch(() => ({ default: { articles: [] } }))
    return NextResponse.json(newsFile.default)
  } catch {
    return NextResponse.json({ articles: [] })
  }
}

export async function POST(request: Request) {
  try {
    const { apiKey } = await request.json()

    if (apiKey !== process.env.NEWS_CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

    const today = new Date().toISOString().split('T')[0]
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: `You are a business news editor for a consulting company focused on administrative affairs, facility management, and employee support services.

Generate 2 news articles about recent global developments in "${category}".

Each article should be:
- Written as if reporting a real industry trend or development
- Professional consulting tone
- Relevant to corporate administrative affairs professionals
- Include both Turkish (tr) and English (en) versions

Return ONLY valid JSON in this exact format:
{
  "articles": [
    {
      "id": "${today}-1",
      "date": "${today}",
      "category": "${category}",
      "tr": {
        "title": "Turkish title here",
        "summary": "2-3 sentence Turkish summary",
        "content": "3-4 paragraph Turkish article content"
      },
      "en": {
        "title": "English title here",
        "summary": "2-3 sentence English summary",
        "content": "3-4 paragraph English article content"
      }
    },
    {
      "id": "${today}-2",
      "date": "${today}",
      "category": "another category from the list",
      "tr": {
        "title": "Turkish title",
        "summary": "Turkish summary",
        "content": "Turkish content"
      },
      "en": {
        "title": "English title",
        "summary": "English summary",
        "content": "English content"
      }
    }
  ]
}`,
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Failed to parse response' }, { status: 500 })
    }

    const newArticles = JSON.parse(jsonMatch[0])

    // Read existing articles
    let existing: { articles: unknown[] } = { articles: [] }
    try {
      const fs = await import('fs/promises')
      const path = await import('path')
      const filePath = path.join(process.cwd(), 'src/data/news.json')
      const data = await fs.readFile(filePath, 'utf-8')
      existing = JSON.parse(data)
    } catch {
      // File doesn't exist yet
    }

    // Merge and keep last 60 articles
    const merged = [...newArticles.articles, ...existing.articles].slice(0, 60)

    // Write back
    const fs = await import('fs/promises')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'src/data/news.json')
    await fs.mkdir(path.dirname(filePath), { recursive: true })
    await fs.writeFile(filePath, JSON.stringify({ articles: merged }, null, 2))

    return NextResponse.json({ success: true, count: newArticles.articles.length })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
