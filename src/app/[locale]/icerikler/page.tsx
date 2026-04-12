import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Icon } from '@/components/Icons'

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag">{dict.insights.tag}</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {dict.insights.title}
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {dict.insights.subtitle}
          </p>
        </div>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.insights.items.map((item, i) => (
            <Link
              key={i}
              href={`/${locale}/resources/${item.slug}`}
              className="group p-6 lg:p-8 rounded-2xl bg-surface border border-border card-hover block"
            >
              {/* Number */}
              <div className="text-4xl font-bold text-primary/10 mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>

              <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                {locale === 'tr' ? 'Devamını Oku' : 'Read More'}
                <Icon name="arrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
