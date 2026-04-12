import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Icon } from '@/components/Icons'
import { notFound } from 'next/navigation'

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const dict = await getDictionary(locale)

  const resource = dict.insights.items.find((item) => item.slug === slug)
  if (!resource) notFound()

  const currentIndex = dict.insights.items.findIndex((item) => item.slug === slug)
  const nextResource = dict.insights.items[currentIndex + 1]
  const prevResource = dict.insights.items[currentIndex - 1]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
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
            <Link href={`/${locale}/icerikler`} className="hover:text-foreground transition-colors">
              {dict.insights.title}
            </Link>
          </div>

          <span className="tag">{dict.insights.tag}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {resource.title}
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            {resource.description}
          </p>
        </div>
      </div>

      {/* Content placeholder */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 lg:p-12 rounded-2xl bg-surface border border-border">
          <div className="flex flex-col items-center text-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Icon name="sparkles" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-3">
              {locale === 'tr' ? 'İçerik Hazırlanıyor' : 'Content Coming Soon'}
            </h2>
            <p className="text-muted max-w-md mb-6">
              {locale === 'tr'
                ? 'Bu içerik üzerinde çalışıyoruz. Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.'
                : 'We are working on this content. Contact us for more information.'}
            </p>
            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200"
            >
              {dict.nav.cta}
              <Icon name="arrowRight" size={14} />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {prevResource && (
            <Link
              href={`/${locale}/resources/${prevResource.slug}`}
              className="p-5 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {locale === 'tr' ? 'Önceki' : 'Previous'}
              </div>
              <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                {prevResource.title}
              </div>
            </Link>
          )}
          {nextResource && (
            <Link
              href={`/${locale}/resources/${nextResource.slug}`}
              className="p-5 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group text-right sm:col-start-2"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {locale === 'tr' ? 'Sonraki' : 'Next'}
              </div>
              <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                {nextResource.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
