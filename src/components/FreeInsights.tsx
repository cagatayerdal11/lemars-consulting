import Link from 'next/link'
import { Icon } from './Icons'
import type { Dictionary } from '@/lib/types'

export function FreeInsights({ dict, locale }: { dict: Dictionary; locale: string }) {
  return (
    <section id="insights" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="tag">{dict.insights.tag}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {dict.insights.title}
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl">
              {dict.insights.subtitle}
            </p>
          </div>
          <Link
            href={`/${locale}/icerikler`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-surface-hover transition-colors flex-shrink-0"
          >
            {dict.insights.cta}
            <Icon name="arrowRight" size={14} />
          </Link>
        </div>

        {/* Insight cards - show first 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.insights.items.slice(0, 3).map((item, i) => (
            <Link
              key={i}
              href={`/${locale}/resources/${item.slug}`}
              className="group p-6 rounded-2xl bg-background border border-border card-hover block"
            >
              {/* Category dot */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {dict.insights.tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
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
    </section>
  )
}
