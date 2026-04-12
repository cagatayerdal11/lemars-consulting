import type { Dictionary } from './types'

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  tr: () => import('@/dictionaries/tr').then((m) => m.default),
  en: () => import('@/dictionaries/en').then((m) => m.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loader = dictionaries[locale] || dictionaries.tr
  return loader()
}

export const locales = ['tr', 'en'] as const
export type Locale = (typeof locales)[number]
