import type { Dictionary } from '@/lib/types'

const stepIcons = [
  // 1. Diagnose - magnifying glass
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  // 2. Document - file text
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  // 3. Control - shield check
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  // 4. Embed - layers
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
]

export function WorkingModel({ dict }: { dict: Dictionary }) {
  return (
    <section id="working-model" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-center" />
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

        {/* 4-Step Grid */}
        <div className="mt-16 max-w-6xl mx-auto">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5">
              <div className="w-full h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            </div>
            <div className="flex justify-between px-[10%]">
              {dict.workingModel.phases.map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center relative z-10">
                  <span className="text-sm font-bold text-primary">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.workingModel.phases.map((phase, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-surface border border-border card-hover overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary to-primary-light" style={{ opacity: 0.3 + i * 0.2 }} />

                <div className="p-6">
                  {/* Step icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {stepIcons[i]}
                    </div>
                    <div>
                      <div className="text-[10px] text-primary font-bold uppercase tracking-[0.15em]">
                        {phase.period}
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-tight">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {phase.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px]">
                        <div className="mt-[5px] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
