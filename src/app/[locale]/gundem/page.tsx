import { getDictionary } from '@/lib/dictionary'
import newsData from '@/data/news.json'

interface NewsArticle {
  id: string
  date: string
  category: string
  tr: { title: string; summary: string; content: string }
  en: { title: string; summary: string; content: string }
}

const categoryColors: Record<string, string> = {
  'Facility Management': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Corporate Catering & Food Safety': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Employee Transportation': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Corporate Travel Management': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Vendor Management & Procurement': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Digital Transformation in Admin Affairs': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const articles: NewsArticle[] = newsData.articles

  // Group by date
  const grouped = articles.reduce((acc, article) => {
    if (!acc[article.date]) acc[article.date] = []
    acc[article.date].push(article)
    return acc
  }, {} as Record<string, NewsArticle[]>)

  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a))

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag">
            {locale === 'tr' ? 'Global Gelişmeler' : 'Global Developments'}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {locale === 'tr' ? 'Gündem' : 'Industry News'}
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {locale === 'tr'
              ? 'İdari işler, tesis yönetimi ve çalışan destek hizmetleri alanındaki küresel gelişmeler ve trendler.'
              : 'Global developments and trends in administrative affairs, facility management, and employee support services.'}
          </p>
        </div>
      </div>

      {/* News feed */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {sortedDates.map((date) => (
          <div key={date} className="mb-12">
            {/* Date header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <time className="text-sm font-semibold text-primary">
                {new Date(date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Articles for this date */}
            <div className="space-y-6">
              {grouped[date].map((article) => {
                const localized = locale === 'tr' ? article.tr : article.en
                const colorClass = categoryColors[article.category] || 'bg-primary/10 text-primary border-primary/20'

                return (
                  <article
                    key={article.id}
                    className="p-6 lg:p-8 rounded-2xl bg-surface border border-border card-hover"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${colorClass}`}>
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                      {localized.title}
                    </h2>
                    <p className="text-sm text-muted mb-4 leading-relaxed">
                      {localized.summary}
                    </p>
                    <details className="group">
                      <summary className="flex items-center gap-1.5 text-sm text-primary font-medium cursor-pointer hover:text-primary-light transition-colors">
                        {locale === 'tr' ? 'Devamını Oku' : 'Read More'}
                        <svg className="w-3 h-3 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                      </summary>
                      <div className="mt-4 text-sm text-muted leading-relaxed whitespace-pre-line border-t border-border pt-4">
                        {localized.content}
                      </div>
                    </details>
                  </article>
                )
              })}
            </div>
          </div>
        ))}

        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">
              {locale === 'tr' ? 'Henüz haber bulunmuyor.' : 'No news articles yet.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
