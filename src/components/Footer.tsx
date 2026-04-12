import Link from 'next/link'
import type { Dictionary } from '@/lib/types'

export function Footer({ dict, locale }: { dict: Dictionary; locale: string }) {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block">
              <span className="text-xl font-extrabold tracking-tight text-gradient">
                {dict.footer.brand}
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Sections */}
          {dict.footer.sections.map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.href.startsWith('#') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
