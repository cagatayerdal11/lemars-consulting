import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const newsData = await import('@/data/news.json')
    return NextResponse.json(newsData.default)
  } catch {
    return NextResponse.json({ articles: [] })
  }
}
