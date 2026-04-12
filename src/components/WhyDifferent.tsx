import { Icon } from './Icons'
import type { Dictionary } from '@/lib/types'

export function WhyDifferent({ dict }: { dict: Dictionary }) {
  return (
    <section id="why-different" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-grid" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="tag">{dict.whyDifferent.tag}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {dict.whyDifferent.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.whyDifferent.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.whyDifferent.items.map((item, i) => (
            <div
              key={i}
              className={`group relative p-6 lg:p-8 rounded-2xl bg-background border border-border card-hover ${
                i >= 3 ? 'md:col-span-1' : ''
              }`}
            >
              <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-primary to-primary-light rounded-b-full" />
              <div className="mt-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon name={item.icon} size={18} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
