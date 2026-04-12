'use client'

import { useState } from 'react'

export function AiSummaryButton({
  summary,
  locale,
}: {
  summary: string
  locale: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const handleClick = () => {
    if (showSummary) {
      setIsOpen(!isOpen)
      return
    }

    setIsOpen(true)
    setIsLoading(true)

    // Simulate AI processing delay (2-3 seconds)
    const delay = 2000 + Math.random() * 1000
    setTimeout(() => {
      setIsLoading(false)
      setShowSummary(true)
    }, delay)
  }

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between p-4 hover:bg-surface-light transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-foreground">
            {locale === 'tr' ? 'Yapay Zeka ile Özetle' : 'Summarize with AI'}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t border-border p-4 bg-surface">
          {isLoading ? (
            <div className="flex items-center gap-3 py-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-sm text-muted animate-pulse">
                {locale === 'tr' ? 'Özet oluşturuluyor...' : 'Generating summary...'}
              </span>
            </div>
          ) : showSummary ? (
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {summary}
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
