import SteampunkBackground from './steampunk/PainterBackground'
import SynthwaveBackground from './synthwave/PainterBackground'

export const THEMES = {
  synthwave: {
    id: 'synthwave',
    name: 'SynthWave',
    colors: {
      background:  '#0d0221',
      surface:     '#150a2d',
      surfaceAlt:  '#1e0f3c',
      border:      '#5a1a9a',
      accent:      '#ff2d78',
      accentHover: '#ff5590',
      text:        '#f4d0ff',
      textMuted:   '#6a40a0',
      canvasBg:    '#0a0118',
    },
    fontFamily: "'Audiowide', sans-serif",
    sceneBackground: '#080015',
    PainterBackground: SynthwaveBackground,
  },

  steampunk: {
    id: 'steampunk',
    name: 'Steampunk',
    colors: {
      background:  '#1a1208',
      surface:     '#2d2010',
      surfaceAlt:  '#3d2e18',
      border:      '#7a5c2e',
      accent:      '#c8860a',
      accentHover: '#e8a820',
      text:        '#e8d5a0',
      textMuted:   '#8a7050',
      canvasBg:    '#241a0c',
    },
    fontFamily: "'Special Elite', serif",
    sceneBackground: '#0e0a04',
    PainterBackground: SteampunkBackground,
  },

  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    colors: {
      background:  '#080010',
      surface:     '#110022',
      surfaceAlt:  '#1a0030',
      border:      '#5500aa',
      accent:      '#cc00ff',
      accentHover: '#ee44ff',
      text:        '#e0c0ff',
      textMuted:   '#7040a0',
      canvasBg:    '#0c0018',
    },
    fontFamily: "'Orbitron', sans-serif",
    sceneBackground: '#050008',
    PainterBackground: CyberpunkBackground,
  },

  blueprint: {
    id: 'blueprint',
    name: 'Blueprint',
    colors: {
      background:  '#0a1628',
      surface:     '#0d1f3c',
      surfaceAlt:  '#122848',
      border:      '#2a4a7f',
      accent:      '#4d9fff',
      accentHover: '#80bbff',
      text:        '#c8dff8',
      textMuted:   '#4a6a9a',
      canvasBg:    '#08121e',
    },
    fontFamily: "'Share Tech Mono', monospace",
    sceneBackground: '#061020',
    PainterBackground: BlueprintBackground,
  },

  watercolor: {
    id: 'watercolor',
    name: 'Watercolor',
    colors: {
      background:  '#f5f0e8',
      surface:     '#ede5d8',
      surfaceAlt:  '#e8ddd0',
      border:      '#c0a880',
      accent:      '#b05030',
      accentHover: '#d06040',
      text:        '#2a1a10',
      textMuted:   '#8a6848',
      canvasBg:    '#ede5d8',
    },
    fontFamily: "'Caveat', cursive",
    sceneBackground: '#f0ebe0',
    PainterBackground: WatercolorBackground,
  },
}

export function getTheme(id) {
  return THEMES[id] ?? THEMES.synthwave
}

export function applyTheme(theme) {
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value)
  })
  root.style.setProperty('--font-family', theme.fontFamily)
}

// ── Cyberpunk background ─────────────────────────────────────────────────────
function CyberpunkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(80,0,160,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(0,200,255,0.1) 0%, transparent 50%)'
      }} />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cybGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(85,0,170,0.2)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cybGrid)" />
        {/* Neon scan lines */}
        {[0.15, 0.35, 0.6, 0.8].map((y, i) => (
          <line key={i} x1="0" y1={`${y * 100}%`} x2="100%" y2={`${y * 100}%`}
            stroke={i % 2 === 0 ? 'rgba(204,0,255,0.12)' : 'rgba(0,200,255,0.08)'}
            strokeWidth="1" />
        ))}
      </svg>
      {/* Glitch lines */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: 'linear-gradient(90deg, transparent, #cc00ff, #00ccff, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-40"
        style={{ background: 'linear-gradient(90deg, transparent, #cc00ff, transparent)' }} />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-15 tracking-widest"
        style={{ fontFamily: "'Orbitron', sans-serif", color: '#cc00ff', letterSpacing: '0.5em' }}>
        PICELL3D
      </div>
    </div>
  )
}

// ── Blueprint background ─────────────────────────────────────────────────────
function BlueprintBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bpSmall" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(45,100,180,0.3)" strokeWidth="0.5"/>
          </pattern>
          <pattern id="bpLarge" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(45,100,180,0.6)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpSmall)" />
        <rect width="100%" height="100%" fill="url(#bpLarge)" />
        {/* Cross-hair markers */}
        {[[15, 15], [85, 15], [15, 85], [85, 85], [50, 50]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x}%,${y}%)`}>
            <line x1="-8" y1="0" x2="8" y2="0" stroke="rgba(77,159,255,0.4)" strokeWidth="1"/>
            <line x1="0" y1="-8" x2="0" y2="8" stroke="rgba(77,159,255,0.4)" strokeWidth="1"/>
            <circle r="3" fill="none" stroke="rgba(77,159,255,0.3)" strokeWidth="0.5"/>
          </g>
        ))}
        {/* Corner title block */}
        <rect x="10" y="10" width="180" height="40" fill="none" stroke="rgba(77,159,255,0.2)" strokeWidth="1"/>
        <text x="20" y="30" fill="rgba(77,159,255,0.25)" fontSize="8" fontFamily="'Share Tech Mono', monospace">PICELL3D — PIXEL ART TO 3D CONVERTER</text>
        <text x="20" y="42" fill="rgba(77,159,255,0.2)" fontSize="7" fontFamily="'Share Tech Mono', monospace">SCALE: 1:1  UNITS: PX  REV: MVP</text>
      </svg>
    </div>
  )
}

// ── Watercolor background ────────────────────────────────────────────────────
function WatercolorBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Paper texture via multiple subtle gradients */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(180,120,60,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(80,120,180,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(200,160,100,0.05) 0%, transparent 70%)
        `
      }} />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Watercolor blobs */}
        <ellipse cx="15%" cy="20%" rx="120" ry="80" fill="rgba(180,120,80,0.06)" />
        <ellipse cx="85%" cy="75%" rx="150" ry="100" fill="rgba(80,130,200,0.05)" />
        <ellipse cx="50%" cy="10%" rx="200" ry="40" fill="rgba(160,100,60,0.04)" />
        {/* Loose pencil grid */}
        {[...Array(8)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12}%`} x2="100%" y2={`${(i + 1) * 12}%`}
            stroke="rgba(160,120,80,0.08)" strokeWidth="0.5" strokeDasharray="4 8" />
        ))}
      </svg>
      {/* Tape corners */}
      {[
        { top: '-6px', left: '30%', rotate: '-8deg' },
        { top: '-6px', right: '25%', rotate: '5deg' },
        { bottom: '-6px', left: '40%', rotate: '3deg' },
      ].map((s, i) => (
        <div key={i} className="absolute w-12 h-5 opacity-20"
          style={{ ...s, transform: `rotate(${s.rotate})`,
            background: 'rgba(200,180,120,0.6)', borderRadius: '1px' }} />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-20"
        style={{ fontFamily: "'Caveat', cursive", color: '#b05030', fontSize: '16px' }}>
        Picell3D
      </div>
    </div>
  )
}
