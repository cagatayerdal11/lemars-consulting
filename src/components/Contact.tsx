'use client'

import { useState } from 'react'
import { Icon } from './Icons'
import type { Dictionary } from '@/lib/types'

export function Contact({ dict, locale }: { dict: Dictionary; locale: string }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, locale }),
      })

      if (res.ok) {
        setSent(true)
        setFormState({ name: '', email: '', company: '', message: '' })
      } else {
        setError(locale === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.')
      }
    } catch {
      setError(locale === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side */}
          <div>
            <span className="tag">{dict.contact.tag}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {dict.contact.title}
            </h2>
            <p className="mt-4 text-lg text-muted max-w-lg">
              {dict.contact.subtitle}
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${dict.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {dict.contact.emailLabel}
                  </div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {dict.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${dict.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name="phone" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {dict.contact.phoneLabel}
                  </div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {dict.contact.phone}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-6 lg:p-8 rounded-2xl bg-surface border border-border">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon name="check" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {locale === 'tr' ? 'Mesajınız Gönderildi' : 'Message Sent'}
                </h3>
                <p className="text-muted">
                  {locale === 'tr' ? 'En kısa sürede size dönüş yapacağız.' : 'We will get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">
                      {locale === 'tr' ? 'İsim' : 'Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">
                      {locale === 'tr' ? 'E-posta' : 'Email'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    {locale === 'tr' ? 'Şirket' : 'Company'}
                  </label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    {locale === 'tr' ? 'Mesaj' : 'Message'} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Icon name="send" size={16} />
                      {dict.contact.cta}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
