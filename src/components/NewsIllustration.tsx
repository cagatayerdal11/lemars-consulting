const illustrations: Record<string, (seed: number) => React.ReactNode> = {
  building: (seed) => (
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#18181B" />
      <rect width="800" height="400" fill="url(#gbg)" />
      {/* Grid */}
      <g opacity="0.05"><line x1="0" y1="100" x2="800" y2="100" stroke="white" /><line x1="0" y1="200" x2="800" y2="200" stroke="white" /><line x1="0" y1="300" x2="800" y2="300" stroke="white" /><line x1="200" y1="0" x2="200" y2="400" stroke="white" /><line x1="400" y1="0" x2="400" y2="400" stroke="white" /><line x1="600" y1="0" x2="600" y2="400" stroke="white" /></g>
      {/* Buildings */}
      <rect x={180 + seed * 3} y="100" width="80" height="220" rx="4" fill="#E8571B" fillOpacity="0.15" stroke="#E8571B" strokeOpacity="0.3" strokeWidth="1" />
      <rect x={300} y="140" width="100" height="180" rx="4" fill="#E8571B" fillOpacity="0.1" stroke="#E8571B" strokeOpacity="0.25" strokeWidth="1" />
      <rect x={440 + seed * 2} y="80" width="70" height="240" rx="4" fill="#E8571B" fillOpacity="0.2" stroke="#E8571B" strokeOpacity="0.35" strokeWidth="1" />
      <rect x={550} y="160" width="90" height="160" rx="4" fill="#E8571B" fillOpacity="0.12" stroke="#E8571B" strokeOpacity="0.2" strokeWidth="1" />
      {/* Windows */}
      {[0,1,2,3,4,5].map(i => <rect key={i} x={195 + seed * 3} y={115 + i * 32} width="12" height="12" rx="1" fill="#E8571B" fillOpacity={0.3 + (i % 3) * 0.1} />)}
      {[0,1,2,3].map(i => <rect key={i} x={320} y={155 + i * 38} width="15" height="12" rx="1" fill="#E8571B" fillOpacity={0.25 + (i % 2) * 0.15} />)}
      {/* Ground line */}
      <line x1="100" y1="320" x2="700" y2="320" stroke="#E8571B" strokeOpacity="0.2" strokeWidth="1" />
      {/* Particles */}
      <circle cx={150 + seed * 5} cy="80" r="3" fill="#E8571B" fillOpacity="0.3" />
      <circle cx={650} cy={60 + seed * 2} r="2" fill="#E8571B" fillOpacity="0.2" />
      <circle cx={700} cy="150" r="4" fill="#E8571B" fillOpacity="0.15" />
      <defs><radialGradient id="gbg" cx="50%" cy="30%" r="60%"><stop stopColor="#E8571B" stopOpacity="0.06" /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
    </svg>
  ),
  utensils: (seed) => (
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#18181B" />
      <rect width="800" height="400" fill="url(#ubg)" />
      <g opacity="0.04">{[0,1,2,3,4,5,6,7].map(i => <line key={i} x1={i*100} y1="0" x2={i*100} y2="400" stroke="white" />)}</g>
      {/* Plate */}
      <ellipse cx="400" cy="220" rx={120 + seed} ry="80" stroke="#E8571B" strokeOpacity="0.3" strokeWidth="1.5" fill="#E8571B" fillOpacity="0.03" />
      <ellipse cx="400" cy="220" rx="80" ry="55" stroke="#E8571B" strokeOpacity="0.15" strokeWidth="1" />
      {/* Fork */}
      <g transform={`translate(${260 + seed * 2}, 120)`}><path d="M0 0 v100 M-8 0 v40 q0 10 8 10 q8 0 8-10 v-40" stroke="#E8571B" strokeWidth="1.5" strokeOpacity="0.5" /></g>
      {/* Knife */}
      <g transform={`translate(${520 - seed}, 110)`}><path d="M0 0 v110 M0 0 q15 20 15 50 q0 15-15 20" stroke="#E8571B" strokeWidth="1.5" strokeOpacity="0.5" /></g>
      {/* Steam lines */}
      <path d={`M380 ${160 - seed} q10-20 0-40`} stroke="#E8571B" strokeOpacity="0.2" strokeWidth="1" fill="none" />
      <path d="M400 150 q10-20 0-40" stroke="#E8571B" strokeOpacity="0.25" strokeWidth="1" fill="none" />
      <path d={`M420 ${155 - seed * 2} q10-20 0-40`} stroke="#E8571B" strokeOpacity="0.2" strokeWidth="1" fill="none" />
      <circle cx="180" cy="100" r="3" fill="#E8571B" fillOpacity="0.2" />
      <circle cx="650" cy="300" r="4" fill="#E8571B" fillOpacity="0.15" />
      <defs><radialGradient id="ubg" cx="50%" cy="50%" r="50%"><stop stopColor="#E8571B" stopOpacity="0.05" /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
    </svg>
  ),
  truck: (seed) => (
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#18181B" />
      <rect width="800" height="400" fill="url(#tbg)" />
      <g opacity="0.04">{[0,1,2,3].map(i => <line key={i} x1="0" y1={i*100+100} x2="800" y2={i*100+100} stroke="white" />)}</g>
      {/* Road */}
      <rect x="0" y="290" width="800" height="40" fill="#E8571B" fillOpacity="0.05" />
      <line x1="0" y1="310" x2="800" y2="310" stroke="#E8571B" strokeOpacity="0.15" strokeDasharray="20 15" strokeWidth="2" />
      {/* Bus body */}
      <rect x={220 + seed * 3} y="180" width="200" height="100" rx="8" fill="#E8571B" fillOpacity="0.12" stroke="#E8571B" strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x={420 + seed * 3} y="200" width="80" height="80" rx="4" fill="#E8571B" fillOpacity="0.08" stroke="#E8571B" strokeOpacity="0.25" strokeWidth="1.5" />
      {/* Windows */}
      {[0,1,2,3].map(i => <rect key={i} x={240 + seed * 3 + i * 45} y="195" width="30" height="25" rx="3" fill="#E8571B" fillOpacity={0.15 + i * 0.05} />)}
      {/* Wheels */}
      <circle cx={280 + seed * 3} cy="285" r="18" stroke="#E8571B" strokeOpacity="0.4" strokeWidth="2" fill="#E8571B" fillOpacity="0.1" />
      <circle cx={460 + seed * 3} cy="285" r="18" stroke="#E8571B" strokeOpacity="0.4" strokeWidth="2" fill="#E8571B" fillOpacity="0.1" />
      {/* Particles */}
      <circle cx="150" cy="120" r="3" fill="#E8571B" fillOpacity="0.25" />
      <circle cx="680" cy="160" r="4" fill="#E8571B" fillOpacity="0.15" />
      <defs><radialGradient id="tbg" cx="40%" cy="40%" r="50%"><stop stopColor="#E8571B" stopOpacity="0.05" /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
    </svg>
  ),
  plane: (seed) => (
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#18181B" />
      <rect width="800" height="400" fill="url(#pbg)" />
      <g opacity="0.04">{[1,2,3].map(i => <circle key={i} cx="400" cy="200" r={i*100} stroke="white" />)}</g>
      {/* Plane */}
      <g transform={`translate(${350 + seed * 2}, 160) rotate(-15)`}>
        <path d="M0 20 L80 0 L80 10 L20 25 L80 35 L80 40 L0 30 Z" fill="#E8571B" fillOpacity="0.2" stroke="#E8571B" strokeOpacity="0.4" strokeWidth="1" />
        <path d="M25 10 L35 -15 L45 10" fill="#E8571B" fillOpacity="0.1" stroke="#E8571B" strokeOpacity="0.3" strokeWidth="1" />
        <path d="M55 30 L60 50 L70 35" fill="#E8571B" fillOpacity="0.1" stroke="#E8571B" strokeOpacity="0.3" strokeWidth="1" />
      </g>
      {/* Trail */}
      <path d={`M${350 + seed * 2} 185 Q300 210 200 ${220 + seed}`} stroke="#E8571B" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="6 6" fill="none" />
      {/* Globe hint */}
      <circle cx="400" cy="280" r="50" stroke="#E8571B" strokeOpacity="0.1" strokeWidth="1" fill="none" />
      <ellipse cx="400" cy="280" rx="30" ry="50" stroke="#E8571B" strokeOpacity="0.07" strokeWidth="1" fill="none" />
      <line x1="350" y1="280" x2="450" y2="280" stroke="#E8571B" strokeOpacity="0.07" strokeWidth="1" />
      <circle cx="650" cy="100" r="3" fill="#E8571B" fillOpacity="0.2" />
      <defs><radialGradient id="pbg" cx="50%" cy="30%" r="50%"><stop stopColor="#E8571B" stopOpacity="0.06" /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
    </svg>
  ),
  shield: (seed) => (
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#18181B" />
      <rect width="800" height="400" fill="url(#sbg)" />
      <g opacity="0.03">{[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => <circle key={i} cx={(i % 4) * 200 + 100} cy={Math.floor(i / 4) * 100 + 50} r="2" fill="white" />)}</g>
      {/* Shield */}
      <path d={`M400 ${80 + seed} L480 ${120 + seed} V${220 + seed} Q480 ${300 + seed} 400 ${330 + seed} Q320 ${300 + seed} 320 ${220 + seed} V${120 + seed} Z`} fill="#E8571B" fillOpacity="0.08" stroke="#E8571B" strokeOpacity="0.3" strokeWidth="1.5" />
      {/* Checkmark */}
      <path d={`M370 ${200 + seed} L390 ${220 + seed} L430 ${180 + seed}`} stroke="#E8571B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" fill="none" />
      {/* Connection lines */}
      <line x1="200" y1="200" x2="320" y2={`${180 + seed}`} stroke="#E8571B" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="600" y1="200" x2="480" y2={`${180 + seed}`} stroke="#E8571B" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="6" fill="#E8571B" fillOpacity="0.15" />
      <circle cx="600" cy="200" r="6" fill="#E8571B" fillOpacity="0.15" />
      <defs><radialGradient id="sbg" cx="50%" cy="40%" r="40%"><stop stopColor="#E8571B" stopOpacity="0.06" /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
    </svg>
  ),
  chart: (seed) => (
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#18181B" />
      <rect width="800" height="400" fill="url(#cbg)" />
      <g opacity="0.05"><line x1="150" y1="320" x2="650" y2="320" stroke="white" /><line x1="150" y1="320" x2="150" y2="80" stroke="white" /></g>
      {/* Bars */}
      {[0,1,2,3,4,5,6].map(i => {
        const h = 60 + ((i * 37 + seed * 13) % 180)
        return <rect key={i} x={200 + i * 60} y={320 - h} width="35" height={h} rx="4" fill="#E8571B" fillOpacity={0.15 + (i % 3) * 0.1} stroke="#E8571B" strokeOpacity={0.2 + (i % 3) * 0.1} strokeWidth="1" />
      })}
      {/* Trend line */}
      <path d={`M217 ${260 - seed * 5} L277 ${200 - seed * 3} L337 ${230 - seed * 4} L397 ${160 - seed * 2} L457 ${180 - seed * 3} L517 ${140 - seed} L577 ${120 - seed * 2}`} stroke="#E8571B" strokeWidth="2" strokeOpacity="0.5" fill="none" />
      {/* Dots on line */}
      {[0,1,2,3,4,5,6].map(i => {
        const y = [260 - seed * 5, 200 - seed * 3, 230 - seed * 4, 160 - seed * 2, 180 - seed * 3, 140 - seed, 120 - seed * 2][i]
        return <circle key={i} cx={217 + i * 60} cy={y} r="4" fill="#E8571B" fillOpacity="0.6" />
      })}
      <defs><radialGradient id="cbg" cx="50%" cy="50%" r="50%"><stop stopColor="#E8571B" stopOpacity="0.05" /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
    </svg>
  ),
}

export function NewsIllustration({ type, title }: { type: string; title: string }) {
  // Generate a deterministic seed from title for slight variation
  const seed = title.length % 10
  const render = illustrations[type] || illustrations.chart

  return (
    <div className="w-full aspect-[2/1] bg-surface">
      {render(seed)}
    </div>
  )
}
