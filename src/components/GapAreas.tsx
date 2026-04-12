import type { Dictionary } from '@/lib/types'

export function GapAreas({ dict }: { dict: Dictionary }) {
  return (
    <section id="gaps" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="tag">{dict.gaps.tag}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {dict.gaps.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.gaps.subtitle}
          </p>
        </div>

        {/* Gap cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {dict.gaps.items.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 lg:p-8 rounded-2xl bg-surface border border-border card-hover"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-primary/10">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold text-foreground mb-3 pr-12">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="text-primary font-medium">{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
