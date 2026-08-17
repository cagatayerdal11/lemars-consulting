// Shared by the Vercel cron route (src/app/api/cron/news/route.ts) and the
// manual publisher (scripts/publish-news.mjs). Both write src/data/news.json,
// and the news pages read illustration/readingTime/aiSummary without guarding —
// so an article missing any of them fails the build and 500s the detail page.
// Keep this the only copy of the logic; two divergent copies is what broke
// production before.

// Illustration keys understood by <NewsIllustration>; it falls back to 'chart'
// for anything it doesn't recognise, so we do the same here.
export const illustrationByCategory = {
  'Facility Management': 'building',
  'Corporate Catering & Food Safety': 'utensils',
  'Employee Transportation': 'truck',
  'Corporate Travel Management': 'plane',
  'Vendor Management & Procurement': 'shield',
  'Digital Transformation in Admin Affairs': 'chart',
}

const wordsPerMinute = { tr: 180, en: 200 }

const readingMinutes = (text, locale) =>
  Math.max(1, Math.round(text.trim().split(/\s+/).length / wordsPerMinute[locale]))

// Fills only what's missing, so existing hand-written values survive and older
// articles get backfilled in place.
export function enrichArticle(article) {
  return {
    ...article,
    illustration:
      article.illustration ?? illustrationByCategory[article.category] ?? 'chart',
    readingTime: article.readingTime ?? {
      tr: `${readingMinutes(article.tr.content, 'tr')} dk`,
      en: `${readingMinutes(article.en.content, 'en')} min`,
    },
    aiSummary: article.aiSummary ?? {
      tr: article.tr.summary,
      en: article.en.summary,
    },
  }
}
