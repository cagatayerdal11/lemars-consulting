export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    services: string
    whyUs: string
    model: string
    insights: string
    contact: string
    cta: string
    langSwitch: string
  }
  hero: {
    tag: string
    title: string
    titleHighlight: string
    subtitle: string
    cta: string
    ctaSecondary: string
    stats: { value: string; label: string }[]
  }
  themes: {
    tag: string
    title: string
    subtitle: string
    items: { icon: string; title: string; description: string }[]
  }
  about: {
    tag: string
    title: string
    description: string
    points: string[]
  }
  services: {
    tag: string
    title: string
    subtitle: string
    pillars: {
      id: string
      icon: string
      title: string
      description: string
      items: string[]
    }[]
  }
  whyDifferent: {
    tag: string
    title: string
    subtitle: string
    items: { icon: string; title: string; description: string }[]
  }
  gaps: {
    tag: string
    title: string
    subtitle: string
    items: { title: string; description: string; impact: string }[]
  }
  employee: {
    tag: string
    title: string
    subtitle: string
    chain: { step: string; description: string }[]
    message: string
  }
  workingModel: {
    tag: string
    title: string
    subtitle: string
    phases: {
      period: string
      title: string
      description: string
      items: string[]
    }[]
  }
  insights: {
    tag: string
    title: string
    subtitle: string
    cta: string
    items: { title: string; description: string; slug: string }[]
  }
  contact: {
    tag: string
    title: string
    subtitle: string
    email: string
    phone: string
    emailLabel: string
    phoneLabel: string
    cta: string
  }
  footer: {
    brand: string
    tagline: string
    rights: string
    sections: {
      title: string
      links: { label: string; href: string }[]
    }[]
  }
  servicesPage: {
    title: string
    subtitle: string
    categories: {
      id: string
      title: string
      description: string
      icon: string
      services: { name: string; description: string }[]
    }[]
  }
}
