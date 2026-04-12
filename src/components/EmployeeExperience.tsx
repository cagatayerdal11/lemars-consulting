import type { Dictionary } from '@/lib/types'

export function EmployeeExperience({ dict }: { dict: Dictionary }) {
  return (
    <section id="employee" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-radial-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="tag">{dict.employee.tag}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {dict.employee.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.employee.subtitle}
          </p>
        </div>

        {/* Chain visualization */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {dict.employee.chain.map((item, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < dict.employee.chain.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 z-10" />
                )}
                <div className="p-5 rounded-2xl bg-background border border-border card-hover h-full">
                  {/* Step number */}
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold mb-3">
                    {i + 1}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">
                    {item.step}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-base text-foreground font-medium leading-relaxed">
              {dict.employee.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
