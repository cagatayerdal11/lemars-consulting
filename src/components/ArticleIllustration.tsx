'use client'

const illustrations: Record<string, React.ReactNode> = {
  utensils: (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" rx="16" fill="currentColor" fillOpacity="0.03" />
      <circle cx="200" cy="120" r="60" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="200" cy="120" r="40" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
      <path d="M180 90v60M180 90c0-8 5-15 10-15s10 7 10 15v20c0 3-2 5-5 5h-10c-3 0-5-2-5-5v-20z" stroke="#E8571B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M220 90v60" stroke="#E8571B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M220 90c0 15-10 20-10 30 0 5 4 8 10 8s10-3 10-8c0-10-10-15-10-30z" stroke="#E8571B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="120" cy="60" r="4" fill="#E8571B" fillOpacity="0.2" />
      <circle cx="280" cy="180" r="3" fill="#E8571B" fillOpacity="0.15" />
      <circle cx="320" cy="80" r="2" fill="#E8571B" fillOpacity="0.1" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" rx="16" fill="currentColor" fillOpacity="0.03" />
      <rect x="100" y="100" width="120" height="60" rx="4" stroke="#E8571B" strokeWidth="1.5" />
      <path d="M220 120h40l20 20v20h-60v-40z" stroke="#E8571B" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="140" cy="165" r="10" stroke="#E8571B" strokeWidth="1.5" />
      <circle cx="260" cy="165" r="10" stroke="#E8571B" strokeWidth="1.5" />
      <path d="M80 160h20M280 160h40" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="320" cy="70" r="4" fill="#E8571B" fillOpacity="0.2" />
      <circle cx="80" cy="80" r="3" fill="#E8571B" fillOpacity="0.15" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" rx="16" fill="currentColor" fillOpacity="0.03" />
      <path d="M160 160l40-80 40 80" stroke="#E8571B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M170 140h60" stroke="#E8571B" strokeWidth="1.5" />
      <path d="M120 140l40-10M280 140l-40-10" stroke="#E8571B" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="200" cy="80" r="3" fill="#E8571B" fillOpacity="0.3" />
      <path d="M100 180h200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="6 6" />
      <circle cx="320" cy="60" r="4" fill="#E8571B" fillOpacity="0.15" />
      <circle cx="80" cy="100" r="2" fill="#E8571B" fillOpacity="0.1" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" rx="16" fill="currentColor" fillOpacity="0.03" />
      <rect x="150" y="60" width="100" height="120" rx="4" stroke="#E8571B" strokeWidth="1.5" />
      <rect x="165" y="75" width="15" height="15" rx="2" stroke="#E8571B" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="192" y="75" width="15" height="15" rx="2" stroke="#E8571B" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="220" y="75" width="15" height="15" rx="2" stroke="#E8571B" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="165" y="100" width="15" height="15" rx="2" stroke="#E8571B" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="192" y="100" width="15" height="15" rx="2" stroke="#E8571B" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="220" y="100" width="15" height="15" rx="2" stroke="#E8571B" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="185" y="145" width="30" height="35" rx="2" stroke="#E8571B" strokeWidth="1.5" />
      <path d="M100 180h200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" rx="16" fill="currentColor" fillOpacity="0.03" />
      <path d="M200 50l50 25v50c0 35-50 65-50 65s-50-30-50-65V75l50-25z" stroke="#E8571B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M185 115l10 10 20-25" stroke="#E8571B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="120" cy="70" r="3" fill="#E8571B" fillOpacity="0.15" />
      <circle cx="300" cy="150" r="4" fill="#E8571B" fillOpacity="0.2" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" rx="16" fill="currentColor" fillOpacity="0.03" />
      <path d="M120 180V100" stroke="#E8571B" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.3" />
      <path d="M160 180V80" stroke="#E8571B" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M200 180V60" stroke="#E8571B" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M240 180V90" stroke="#E8571B" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M280 180V70" stroke="#E8571B" strokeWidth="8" strokeLinecap="round" />
      <path d="M100 180h200" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      <path d="M120 100 160 80 200 60 240 90 280 70" stroke="#E8571B" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" />
    </svg>
  ),
}

export function ArticleIllustration({ icon }: { icon: string }) {
  return (
    <div className="w-full aspect-[5/3] rounded-xl overflow-hidden text-foreground">
      {illustrations[icon] || illustrations.chart}
    </div>
  )
}
