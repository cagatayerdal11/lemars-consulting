'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from './Icons'
import type { Dictionary } from '@/lib/types'

export function ServicePillars({ dict, locale }: { dict: Dictionary; locale: string }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="tag">{dict.services.tag}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {dict.services.pillars.map((pillar, i) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-muted hover:text-foreground hover:bg-surface-light border border-border'
              }`}
            >
              <Icon name={pillar.icon} size={16} />
              <span className="hidden sm:inline">{pillar.title}</span>
              <span className="sm:hidden">{pillar.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active pillar content */}
        <div className="mt-10">
          {dict.services.pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className={`transition-all duration-300 ${
                activeTab === i ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left: Description */}
                <div className="p-8 rounded-2xl bg-surface border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon name={pillar.icon} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{pillar.description}</p>
                  <Link
                    href={`/${locale}/hizmetler`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light text-sm font-medium transition-colors"
                  >
                    {locale === 'tr' ? 'Tüm Hizmetleri İncele' : 'Explore All Services'}
                    <Icon name="arrowRight" size={14} />
                  </Link>
                </div>

                {/* Right: Items grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {pillar.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border card-hover"
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
