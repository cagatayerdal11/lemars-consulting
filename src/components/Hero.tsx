import type { Dictionary } from '@/lib/types'

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-top" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Tag */}
        <div className="animate-fade-in-up">
          <span className="tag">{dict.hero.tag}</span>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up delay-100">
          <span className="text-foreground">{dict.hero.title}</span>
          <br />
          <span className="text-gradient">{dict.hero.titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed animate-fade-in-up delay-200">
          {dict.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#themes"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            {dict.hero.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg border border-border text-foreground hover:bg-surface-light transition-all duration-200"
          >
            {dict.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in-up delay-500">
          {dict.hero.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
