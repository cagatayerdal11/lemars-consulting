import { Icon } from './Icons'
import type { Dictionary } from '@/lib/types'

export function CoreThemes({ dict }: { dict: Dictionary }) {
  return (
    <section id="themes" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="tag">{dict.themes.tag}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {dict.themes.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.themes.subtitle}
          </p>
        </div>

        {/* Theme cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.themes.items.map((item, i) => (
            <div
              key={i}
              className={`group relative p-6 lg:p-8 rounded-2xl bg-surface border border-border card-hover ${
                i >= 3 ? 'lg:col-span-1 md:col-span-1' : ''
              }`}
            >
              <div className="gradient-border absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon name={item.icon} size={22} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
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
