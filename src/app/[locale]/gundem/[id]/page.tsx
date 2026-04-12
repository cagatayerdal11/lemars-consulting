import Link from 'next/link'
import newsData from '@/data/news.json'
import { notFound } from 'next/navigation'
import { NewsIllustration } from '@/components/NewsIllustration'
import { AiSummaryButton } from '@/components/AiSummaryButton'

interface NewsArticle {
  id: string
  date: string
  category: string
  illustration: string
  readingTime: { tr: string; en: string }
  aiSummary: { tr: string; en: string }
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  const articles: NewsArticle[] = newsData.articles as NewsArticle[]
  const article = articles.find((a) => a.id === id)

  if (!article) notFound()

  const localized = locale === 'tr' ? article.tr : article.en
  const colorClass = categoryColors[article.category] || 'bg-primary/10 text-primary border-primary/20'
  const readingTime = locale === 'tr' ? article.readingTime.tr : article.readingTime.en
  const aiSummary = locale === 'tr' ? article.aiSummary.tr : article.aiSummary.en

  // Find adjacent articles
  const currentIdx = articles.findIndex((a) => a.id === id)
  const prevArticle = articles[currentIdx + 1] // older
  const nextArticle = articles[currentIdx - 1] // newer

  // Calculate word count for content display
  const paragraphs = localized.content.split('\n\n').filter(Boolean)

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted mb-6">
            <Link href={`/${locale}`} className="hover:text-foreground transition-colors">
              {locale === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/gundem`} className="hover:text-foreground transition-colors">
              {locale === 'tr' ? 'Gündem' : 'News'}
            </Link>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${colorClass}`}>
              {article.category}
            </span>
            <time className="text-sm text-muted-foreground">
              {new Date(article.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
            {localized.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {localized.summary}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Illustration */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-border">
          <NewsIllustration type={article.illustration} title={localized.title} />
        </div>

        {/* AI Summary button */}
        <AiSummaryButton
          summary={aiSummary}
          locale={locale}
        />

        {/* Article content */}
        <article className="mt-8 p-6 lg:p-10 rounded-2xl bg-surface border border-border">
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {prevArticle && (
            <Link
              href={`/${locale}/gundem/${prevArticle.id}`}
              className="p-5 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {locale === 'tr' ? '← Önceki Haber' : '← Previous'}
              </div>
              <div className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {(locale === 'tr' ? prevArticle.tr : prevArticle.en).title}
              </div>
            </Link>
          )}
          {nextArticle && (
            <Link
              href={`/${locale}/gundem/${nextArticle.id}`}
              className="p-5 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group text-right sm:col-start-2"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {locale === 'tr' ? 'Sonraki Haber →' : 'Next →'}
              </div>
              <div className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {(locale === 'tr' ? nextArticle.tr : nextArticle.en).title}
              </div>
            </Link>
          )}
        </div>

        {/* Back to all */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/gundem`}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            {locale === 'tr' ? 'Tüm Haberlere Dön' : 'Back to All News'}
          </Link>
        </div>
      </div>
    </div>
  )
}
