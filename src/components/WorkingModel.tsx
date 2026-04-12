import type { Dictionary } from '@/lib/types'

export function WorkingModel({ dict }: { dict: Dictionary }) {
  return (
    <section id="working-model" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="tag">{dict.workingModel.tag}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {dict.workingModel.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.workingModel.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {dict.workingModel.phases.map((phase, i) => (
              <div
                key={i}
                className="relative p-6 lg:p-8 rounded-2xl bg-surface border border-border card-hover"
              >
                {/* Phase indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="number-badge">{i + 1}</div>
                  <div>
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {phase.period}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-muted mb-5 leading-relaxed">
                  {phase.description}
                </p>

                {/* Items */}
                <ul className="space-y-2.5">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress line at bottom */}
                <div className="mt-6 h-1 rounded-full bg-surface-light overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                    style={{ width: `${((i + 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
