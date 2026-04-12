'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Icon } from './Icons'
import type { Dictionary } from '@/lib/types'

export function Navbar({ dict, locale }: { dict: Dictionary; locale: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const otherLocale = locale === 'tr' ? 'en' : 'tr'

  const navItems = [
    { label: dict.nav.services, href: '#services' },
    { label: dict.nav.whyUs, href: '#why-different' },
    { label: dict.nav.model, href: '#working-model' },
    { label: dict.nav.insights, href: '#insights' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-gradient">
              LEMARS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={`/${otherLocale}`}
              className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-light"
            >
              <Icon name="globe" size={14} />
              {dict.nav.langSwitch}
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              {dict.nav.cta}
              <Icon name="arrowRight" size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-muted hover:text-foreground"
          >
            <Icon name={mobileOpen ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border/50">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base text-muted hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="separator my-4" />
            <div className="flex items-center gap-4">
              <Link
                href={`/${otherLocale}`}
                className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
              >
                <Icon name="globe" size={14} />
                {dict.nav.langSwitch}
              </Link>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-3 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              {dict.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
