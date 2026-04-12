import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const newsPath = join(__dirname, '..', 'src', 'data', 'news.json')
const poolPath = join(__dirname, 'news-pool.json')

const today = new Date().toISOString().split('T')[0]

// Read current news
let currentNews = { articles: [] }
try {
  currentNews = JSON.parse(readFileSync(newsPath, 'utf-8'))
} catch { /* first run */ }

// Check if we already published today
const alreadyPublishedToday = currentNews.articles.some(a => a.date === today)
if (alreadyPublishedToday) {
  console.log(`Already published for ${today}, skipping.`)
  process.exit(0)
}

// Read news pool
const pool = JSON.parse(readFileSync(poolPath, 'utf-8'))

// Find which pool articles haven't been published yet
const publishedIds = new Set(currentNews.articles.map(a => a.poolId).filter(Boolean))
const available = pool.articles.filter(a => !publishedIds.has(a.poolId))

if (available.length < 2) {
  console.log('News pool exhausted. Recycling from beginning.')
  // Reset - take from the start
  available.push(...pool.articles.slice(0, 2))
}

// Pick 2 articles for today
const todayArticles = available.slice(0, 2).map((article, i) => ({
  ...article,
  id: `${today}-${i + 1}`,
  date: today,
}))

// Merge: new articles first, keep last 90 articles
const merged = [...todayArticles, ...currentNews.articles].slice(0, 90)

writeFileSync(newsPath, JSON.stringify({ articles: merged }, null, 2))
console.log(`Published ${todayArticles.length} articles for ${today}`)
console.log(`Total articles: ${merged.length}`)
