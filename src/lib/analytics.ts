// GA4 measurement ID. Measurement IDs are public by design (they ship in the
// client HTML), so the default is committed and the site works without any
// dashboard config. Set NEXT_PUBLIC_GA_ID to point a deployment at another
// property.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-CXBCX0XRM4'
