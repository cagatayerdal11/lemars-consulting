import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Icon } from '@/components/Icons'
import { notFound } from 'next/navigation'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const dict = await getDictionary(locale)

  const article = dict.serviceArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = dict.serviceArticles.findIndex((a) => a.slug === slug)
  const nextArticle = dict.serviceArticles[currentIndex + 1]
  const prevArticle = dict.serviceArticles[currentIndex - 1]

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted mb-6">
            <Link href={`/${locale}`} className="hover:text-foreground transition-colors">
              {locale === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/hizmetler`} className="hover:text-foreground transition-colors">
              {dict.nav.services}
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Icon name={article.icon} size={24} />
            </div>
            <span className="tag">{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted max-w-3xl leading-relaxed">
            {article.subtitle}
          </p>

          {/* Hero stats */}
          {article.heroStats.length > 0 && (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {article.heroStats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface border border-border text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview */}
        <div className="p-6 lg:p-10 rounded-2xl bg-surface border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4">{article.overview.title}</h2>
          <div className="text-muted leading-relaxed whitespace-pre-line">
            {article.overview.content}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {article.sections.map((section, i) => (
            <div key={i} className="p-6 lg:p-10 rounded-2xl bg-surface border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="number-badge flex-shrink-0 w-10 h-10 text-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="text-xl lg:text-2xl font-bold pt-1">{section.title}</h2>
              </div>

              <div className="text-muted leading-relaxed whitespace-pre-line mb-4">
                {section.content}
              </div>

              {section.items && section.items.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.highlight && (
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    {section.highlight}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Blind Spots */}
        <div className="mt-8 p-6 lg:p-10 rounded-2xl bg-surface border border-border">
          <h2 className="text-2xl font-bold mb-6">{article.blindSpots.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {article.blindSpots.items.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Framework */}
        <div className="mt-8 p-6 lg:p-10 rounded-2xl bg-surface border border-border">
          <h2 className="text-2xl font-bold mb-2">{article.framework.title}</h2>
          <p className="text-muted mb-8">{article.framework.subtitle}</p>
          <div className="space-y-4">
            {article.framework.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border card-hover">
                <div className="number-badge flex-shrink-0 w-10 h-10 text-sm">{step.number}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <p className="text-lg font-medium text-foreground mb-6 max-w-2xl mx-auto">
            {article.ctaMessage}
          </p>
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            {dict.nav.cta}
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {prevArticle && (
            <Link
              href={`/${locale}/hizmetler/${prevArticle.slug}`}
              className="p-5 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {locale === 'tr' ? 'Önceki' : 'Previous'}
              </div>
              <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                {prevArticle.title}
              </div>
            </Link>
          )}
          {nextArticle && (
            <Link
              href={`/${locale}/hizmetler/${nextArticle.slug}`}
              className="p-5 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group text-right sm:col-start-2"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {locale === 'tr' ? 'Sonraki' : 'Next'}
              </div>
              <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                {nextArticle.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
