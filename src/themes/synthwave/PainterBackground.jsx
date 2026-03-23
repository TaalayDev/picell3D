const VP_X = 720     // vanishing point x (center of 1440-wide view)
const VP_Y = 496     // horizon y (62% of 800)
const VW   = 1440
const VH   = 800
const SUN_R = 130

// Pre-seeded stars [x, y, r, anim]
const STARS = [
  [72,  44, 1.5, 0], [180, 88, 1.0, 1], [252, 28, 1.8, 2], [360, 72, 0.8, 0],
  [432, 115, 1.2, 1],[504, 38, 1.0, 2], [612, 60, 1.4, 0], [684, 95, 0.8, 1],
  [756, 22, 1.6, 2], [828, 82, 1.0, 0],[900, 48, 1.2, 1], [972, 118, 0.9, 2],
  [1044,35, 1.5, 0],[1116,75, 1.1, 1],[1188,28, 1.7, 2],[1332,55, 1.0, 0],
  [108, 162,1.0, 1],[288, 188,0.8, 2],[468, 172,1.3, 0],[648, 195,1.0, 1],
  [828, 168,0.9, 2],[1008,190,1.4, 0],[1188,178,1.1, 1],[1368,195,0.8, 2],
  [36,  215,0.7, 0],[216, 238,1.2, 1],[396, 222,0.8, 2],[576, 245,1.0, 0],
  [756, 230,1.3, 1],[936, 248,0.7, 2],[1116,225,1.1, 0],[1296,240,0.9, 1],
  [144, 285,0.8, 2],[432, 298,1.0, 0],[720, 278,0.6, 1],[1008,292,0.9, 2],
  [1296,285,1.1, 0],[288, 322,0.7, 1],[864, 318,0.8, 2],[1440,310,0.9, 0],
]

// Grid horizontal lines — quadratic compression toward horizon
const H_LINES = Array.from({ length: 18 }, (_, i) => {
  const t = ((i + 1) / 19) ** 0.6
  return VP_Y + (VH - VP_Y) * t
})

// Grid vertical lines — fan from vanishing point to bottom
const V_LINES = Array.from({ length: 23 }, (_, i) => ({
  x1: VP_X, y1: VP_Y,
  x2: (i / 22) * VW,
  y2: VH,
}))

// Sun horizontal stripes — black lines that show between colored bands
const SUN_STRIPES = Array.from({ length: 22 }, (_, i) => {
  const t = ((i + 1) / 23) ** 0.65     // 0=top of sun, 1=equator
  const y = (VP_Y - SUN_R) + t * SUN_R
  const thick = 1.2 + i * 0.28          // thicker near equator
  return { y, thick }
})

const STAR_CLASSES = ['sw-star-a', 'sw-star-b', 'sw-star-c']

export default function SynthwaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>

      {/* Sky gradient */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(180deg,
          #080015 0%,
          #120330 18%,
          #1e0852 34%,
          #350a6e 48%,
          #5c0a80 59%,
          #9a1278 68%,
          #d02268 77%,
          #ee3268 86%,
          #ff4878 95%,
          #ff6090 100%)`
      }}/>

      {/* Main SVG layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="swSunGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fff8e8"/>
            <stop offset="22%"  stopColor="#ffe060"/>
            <stop offset="50%"  stopColor="#ff8030"/>
            <stop offset="80%"  stopColor="#ff2d78"/>
            <stop offset="100%" stopColor="#aa0a60"/>
          </radialGradient>
          <radialGradient id="swSunGlow" cx="50%" cy="80%" r="50%">
            <stop offset="0%"   stopColor="#ff2d78" stopOpacity="0.5"/>
            <stop offset="50%"  stopColor="#cc44ff" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#cc44ff" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="swGridH" x1="0" y1={VP_Y} x2="0" y2={VH} gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#ff2d78" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#ff2d78" stopOpacity="0.2"/>
          </linearGradient>
          <linearGradient id="swGridV" x1="0" y1={VP_Y} x2="0" y2={VH} gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#44ddff" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#aa44ff" stopOpacity="0.15"/>
          </linearGradient>
          <clipPath id="swSunClip">
            <rect x={VP_X - SUN_R - 4} y={0} width={SUN_R * 2 + 8} height={VP_Y + 2}/>
          </clipPath>
          <filter id="swGlow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="swGlowSoft">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Stars */}
        {STARS.map(([x, y, r, animIdx], i) => (
          <circle
            key={i} cx={x} cy={y} r={r}
            fill={i % 7 === 0 ? '#ccddff' : i % 5 === 0 ? '#ffccee' : '#ffffff'}
            opacity={0.35 + (i % 4) * 0.12}
            className={STAR_CLASSES[animIdx]}
          />
        ))}

        {/* Sun ambient glow */}
        <ellipse cx={VP_X} cy={VP_Y} rx={SUN_R * 2.6} ry={SUN_R * 1.2}
          fill="url(#swSunGlow)" className="sw-glow-pulse"/>

        {/* Sun body */}
        <circle cx={VP_X} cy={VP_Y} r={SUN_R}
          fill="url(#swSunGrad)" clipPath="url(#swSunClip)"/>

        {/* Sun stripes — dark bars that reveal colored bands */}
        {SUN_STRIPES.map(({ y, thick }, i) => (
          <line key={i}
            x1={VP_X - SUN_R - 2} y1={y} x2={VP_X + SUN_R + 2} y2={y}
            stroke="#080015" strokeWidth={thick}
            clipPath="url(#swSunClip)"
            opacity={0.92}
          />
        ))}

        {/* Horizon glow */}
        <line x1={0} y1={VP_Y} x2={VW} y2={VP_Y}
          stroke="#ff2d78" strokeWidth={3} opacity={0.9} filter="url(#swGlow)"/>
        <line x1={0} y1={VP_Y} x2={VW} y2={VP_Y}
          stroke="#ffaacc" strokeWidth={0.6} opacity={0.7}/>

        {/* Grid — vertical lines (fan from VP) */}
        {V_LINES.map((l, i) => {
          const isEdge = i === 0 || i === V_LINES.length - 1
          return (
            <line key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="url(#swGridV)"
              strokeWidth={isEdge ? 1.2 : 0.7}
              opacity={0.65}
            />
          )
        })}

        {/* Grid — horizontal lines */}
        {H_LINES.map((y, i) => {
          const lerp = (y - VP_Y) / (VH - VP_Y)
          const lx = Math.max(0,  VP_X - VP_X * lerp * 1.15)
          const rx = Math.min(VW, VP_X + (VW - VP_X) * lerp * 1.15)
          return (
            <line key={i}
              x1={lx} y1={y} x2={rx} y2={y}
              stroke="url(#swGridH)"
              strokeWidth={0.6 + lerp * 2}
              opacity={0.45 + lerp * 0.4}
            />
          )
        })}

        {/* Ground glow strip */}
        <rect x={0} y={VH - 4} width={VW} height={4}
          fill="url(#swGridH)" opacity={0.4}/>
      </svg>

      {/* CRT scan lines */}
      <div className="absolute inset-0 sw-scanlines"/>

      {/* Moving scan sweep */}
      <div className="absolute left-0 right-0 h-px sw-scan-sweep"
        style={{ background: 'rgba(255,45,120,0.25)', boxShadow: '0 0 6px rgba(255,45,120,0.4)' }}/>

      {/* Top chrome border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #cc44ff 25%, #ff2d78 50%, #cc44ff 75%, transparent)', boxShadow: '0 0 12px rgba(204,68,255,0.7), 0 0 24px rgba(255,45,120,0.3)' }}/>

      {/* Bottom chrome border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #44ddff 25%, #aa44ff 50%, #44ddff 75%, transparent)', boxShadow: '0 0 12px rgba(68,221,255,0.7)' }}/>

      {/* Left chrome border */}
      <div className="absolute top-0 bottom-0 left-0 w-px"
        style={{ background: 'linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)', opacity: 0.3 }}/>

      {/* Right chrome border */}
      <div className="absolute top-0 bottom-0 right-0 w-px"
        style={{ background: 'linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)', opacity: 0.3 }}/>

      {/* Corner brackets — top left */}
      <div className="absolute top-0 left-0" style={{ width: 32, height: 32,
        borderTop: '1px solid rgba(204,68,255,0.6)', borderLeft: '1px solid rgba(204,68,255,0.6)' }}/>
      {/* top right */}
      <div className="absolute top-0 right-0" style={{ width: 32, height: 32,
        borderTop: '1px solid rgba(204,68,255,0.6)', borderRight: '1px solid rgba(204,68,255,0.6)' }}/>
      {/* bottom left */}
      <div className="absolute bottom-0 left-0" style={{ width: 32, height: 32,
        borderBottom: '1px solid rgba(68,221,255,0.6)', borderLeft: '1px solid rgba(68,221,255,0.6)' }}/>
      {/* bottom right */}
      <div className="absolute bottom-0 right-0" style={{ width: 32, height: 32,
        borderBottom: '1px solid rgba(68,221,255,0.6)', borderRight: '1px solid rgba(68,221,255,0.6)' }}/>

      {/* Watermark */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 tracking-widest sw-flicker"
        style={{ fontFamily: "'Audiowide', sans-serif", color: '#ff2d78', letterSpacing: '0.55em',
          textTransform: 'uppercase', fontSize: '10px', opacity: 0.22 }}>
        PICELL · 3D
      </div>
    </div>
  )
}
