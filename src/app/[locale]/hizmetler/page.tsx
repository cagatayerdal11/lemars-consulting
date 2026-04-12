import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Icon } from '@/components/Icons'

export default async function ServicesPage({
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
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag">{dict.services.tag}</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {dict.servicesPage.title}
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {dict.servicesPage.subtitle}
          </p>
        </div>
      </div>

      {/* Service categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {dict.servicesPage.categories.map((category, i) => (
            <div
              key={category.id}
              id={category.id}
              className="p-6 lg:p-10 rounded-2xl bg-surface border border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                {/* Category header */}
                <div className="lg:w-1/3 lg:sticky lg:top-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon name={category.icon} size={24} />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                    {category.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Services grid */}
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                  {category.services.map((service, j) => (
                    <div
                      key={j}
                      className="p-5 rounded-xl bg-background border border-border card-hover"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-1.5">
                            {service.name}
                          </h3>
                          <p className="text-xs text-muted leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold mb-3">
              {locale === 'tr' ? 'Hizmetlerimiz Hakkında Konuşalım' : "Let's Talk About Our Services"}
            </h3>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              {locale === 'tr'
                ? 'İdari işler fonksiyonunuzdaki fırsatları birlikte keşfedelim.'
                : "Let's discover opportunities in your administrative affairs function together."}
            </p>
            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              {dict.nav.cta}
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
