export default function SteampunkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>
      {/* Base texture layer */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 15% 50%, rgba(120,80,20,0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 50%, rgba(100,60,10,0.12) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(80,50,10,0.2) 0%, transparent 40%)
        `
      }} />

      {/* Far background SVG — large subtle gears and pipes */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gearFill" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#4a3010" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#1a0e00" stopOpacity="0.3"/>
          </radialGradient>
          <pattern id="hexTile" width="44" height="50" patternUnits="userSpaceOnUse">
            <path d="M22 2 L42 13 L42 37 L22 48 L2 37 L2 13 Z"
              fill="none" stroke="rgba(122,92,46,0.06)" strokeWidth="1"/>
          </pattern>
          <pattern id="rivetPattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.5" fill="none" stroke="rgba(122,92,46,0.3)" strokeWidth="0.5"/>
            <circle cx="4" cy="4" r="1" fill="rgba(200,134,10,0.2)"/>
            <circle cx="76" cy="76" r="2.5" fill="none" stroke="rgba(122,92,46,0.3)" strokeWidth="0.5"/>
            <circle cx="76" cy="76" r="1" fill="rgba(200,134,10,0.2)"/>
          </pattern>
        </defs>

        {/* Full background patterns */}
        <rect width="100%" height="100%" fill="url(#hexTile)"/>
        <rect width="100%" height="100%" fill="url(#rivetPattern)"/>

        {/* Large gear — far left */}
        <g opacity="0.18">
          <GearSVG cx={70} cy={220} outerR={160} innerR={124} teeth={28} holeR={52}/>
        </g>

        {/* Large gear — far right */}
        <g opacity="0.15">
          <GearSVGRight cx={-90} cy={180} outerR={180} innerR={140} teeth={32} holeR={60}/>
        </g>

        {/* Medium gear — bottom center */}
        <g opacity="0.12">
          <GearSVGBottom cx={0} cy={-60} outerR={120} innerR={92} teeth={20} holeR={38}/>
        </g>

        {/* Top horizontal pipe */}
        <g opacity="0.35">
          <PipeGroup y={52} segments={[0, 100, 200, 320, 480, 640, 760]} width="100%"/>
        </g>

        {/* Bottom horizontal pipe */}
        <g opacity="0.25">
          <PipeGroup y={-28} fromBottom segments={[80, 200, 380, 540, 700]} width="100%"/>
        </g>

        {/* Vertical pipe — left edge */}
        <rect x="5" y="0" width="4" height="100%" fill="rgba(122,92,46,0.15)" rx="2"/>
        <rect x="3" y="0" width="1" height="100%" fill="rgba(200,134,10,0.1)"/>

        {/* Vertical pipe — right edge */}
        <rect x="calc(100% - 9px)" y="0" width="4" height="100%" fill="rgba(122,92,46,0.12)" rx="2"/>
      </svg>

      {/* Left foreground decorative gear (more visible) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30" style={{ left: '-40px' }}>
        <AnimatedGear size={180} teeth={20} className="gear-spin-slow" stroke="#c8860a" strokeWidth={2}/>
      </div>

      {/* Right foreground gear */}
      <div className="absolute right-0 top-1/3 opacity-22" style={{ right: '-50px' }}>
        <AnimatedGear size={200} teeth={24} className="gear-spin-reverse" stroke="#7a5c2e" strokeWidth={1.5}/>
      </div>

      {/* Small gear cluster — bottom right */}
      <div className="absolute bottom-8 right-4 flex items-end gap-0 opacity-40">
        <AnimatedGear size={60} teeth={12} className="gear-spin" stroke="#c8860a" strokeWidth={1.5}/>
        <AnimatedGear size={40} teeth={8} className="gear-spin-reverse" stroke="#8a5c08" strokeWidth={1.5} style={{ marginLeft: '-8px', marginBottom: '10px' }}/>
        <AnimatedGear size={28} teeth={6} className="gear-spin-slow" stroke="#c8860a" strokeWidth={1} style={{ marginLeft: '-6px', marginBottom: '6px' }}/>
      </div>

      {/* Small gear — top left corner */}
      <div className="absolute top-6 left-4 opacity-35">
        <AnimatedGear size={48} teeth={10} className="gear-spin-reverse" stroke="#c8860a" strokeWidth={1.5}/>
      </div>

      {/* Steam pipes top decoration */}
      <SteamDecoration />

      {/* Watermark */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ fontFamily: "'Special Elite', serif", color: 'rgba(200,134,10,0.12)', fontSize: '11px', letterSpacing: '0.5em', textTransform: 'uppercase' }}>
        Picell 3D Engine
      </div>
    </div>
  )
}

function AnimatedGear({ size, teeth, className, stroke, strokeWidth = 1.5, style }) {
  const r = size / 2 - 6
  const innerR = r * 0.78
  const path = gearPath(size / 2, size / 2, r, innerR, teeth, 0.4)
  return (
    <svg width={size} height={size} className={className} style={style}>
      <path d={path} fill="none" stroke={stroke} strokeWidth={strokeWidth}/>
      <circle cx={size/2} cy={size/2} r={r * 0.38} fill="none" stroke={stroke} strokeWidth={strokeWidth * 0.8}/>
      {/* Spokes */}
      {[0, 60, 120, 180, 240, 300].slice(0, Math.min(6, Math.floor(teeth/4))).map((deg, i) => {
        const rad = deg * Math.PI / 180
        const x1 = size/2 + Math.cos(rad) * r * 0.38
        const y1 = size/2 + Math.sin(rad) * r * 0.38
        const x2 = size/2 + Math.cos(rad) * r * 0.68
        const y2 = size/2 + Math.sin(rad) * r * 0.68
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth * 0.6}/>
      })}
      <circle cx={size/2} cy={size/2} r={r * 0.1} fill={stroke} opacity="0.6"/>
    </svg>
  )
}

// SVG gear shape for use inside SVG context
function GearSVG({ cx, cy, outerR, innerR, teeth, holeR }) {
  const path = gearPath(cx, cy, outerR, innerR, teeth, 0.4)
  return (
    <>
      <path d={path} fill="url(#gearFill)" stroke="rgba(122,92,46,0.4)" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r={holeR} fill="rgba(10,6,2,0.6)" stroke="rgba(122,92,46,0.3)" strokeWidth="1"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const r = deg * Math.PI / 180
        const x1 = cx + Math.cos(r) * holeR
        const y1 = cy + Math.sin(r) * holeR
        const x2 = cx + Math.cos(r) * (innerR * 0.7)
        const y2 = cy + Math.sin(r) * (innerR * 0.7)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(122,92,46,0.2)" strokeWidth="1.5"/>
      })}
      <circle cx={cx} cy={cy} r={holeR * 0.3} fill="rgba(200,134,10,0.15)" stroke="rgba(122,92,46,0.3)" strokeWidth="0.8"/>
    </>
  )
}

// Right-anchored gear
function GearSVGRight({ cx, cy, outerR, innerR, teeth, holeR }) {
  return (
    <g transform={`translate(100%,${cy})`}>
      <GearSVG cx={cx} cy={0} outerR={outerR} innerR={innerR} teeth={teeth} holeR={holeR}/>
    </g>
  )
}

// Bottom-anchored gear
function GearSVGBottom({ cx, cy, outerR, innerR, teeth, holeR }) {
  return (
    <g transform={`translate(50%,100%)`}>
      <GearSVG cx={cx} cy={cy} outerR={outerR} innerR={innerR} teeth={teeth} holeR={holeR}/>
    </g>
  )
}

function PipeGroup({ y, fromBottom, segments }) {
  const yPos = fromBottom ? `calc(100% - ${-y}px)` : `${y}px`
  const pipeY = fromBottom ? '100%' : '0'
  return (
    <g>
      <line x1="0" y1={yPos} x2="100%" y2={yPos} stroke="url(#pipeGrad2)" strokeWidth="6"/>
      <line x1="0" y1={yPos} x2="100%" y2={yPos} stroke="rgba(200,134,10,0.15)" strokeWidth="1"/>
    </g>
  )
}

function SteamDecoration() {
  return (
    <svg className="absolute top-0 left-0 w-full opacity-25 pointer-events-none" height="56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pipeGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d09030"/>
          <stop offset="40%" stopColor="#8a5c10"/>
          <stop offset="100%" stopColor="#3d2010"/>
        </linearGradient>
      </defs>
      {/* Main pipe */}
      <rect x="0" y="32" width="100%" height="6" rx="3" fill="url(#pipeGrad2)"/>
      <rect x="0" y="33" width="100%" height="1" fill="rgba(255,200,60,0.15)"/>
      {/* Pipe flanges */}
      {[60, 160, 280, 420, 560, 700].map(x => (
        <g key={x}>
          <rect x={x-5} y={28} width={10} height={14} rx="1.5" fill="#8a5c10"/>
          <rect x={x-5} y={28} width={10} height={2} rx="1" fill="#c8860a" opacity="0.5"/>
          <circle cx={x} cy={35} r={2.5} fill="#4a3010"/>
        </g>
      ))}
      {/* Steam puffs */}
      {[100, 340, 580].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={24} r={4} fill="rgba(220,200,150,0.3)" className="steam-puff" style={{ animationDelay: `${i*1.1}s` }}/>
          <circle cx={x+3} cy={18} r={2.5} fill="rgba(220,200,150,0.2)" className="steam-puff-delay" style={{ animationDelay: `${i*1.1+0.3}s` }}/>
        </g>
      ))}
    </svg>
  )
}

function gearPath(cx, cy, outerR, innerR, teeth, toothWidth) {
  const pts = []
  const totalAngles = teeth * 2
  for (let i = 0; i < totalAngles; i++) {
    const angle = (i / totalAngles) * Math.PI * 2 - Math.PI / 2
    const half = (Math.PI / totalAngles) * toothWidth
    const r = i % 2 === 0 ? outerR : innerR
    pts.push(`${cx + Math.cos(angle - half) * r},${cy + Math.sin(angle - half) * r}`)
    pts.push(`${cx + Math.cos(angle + half) * r},${cy + Math.sin(angle + half) * r}`)
  }
  return `M ${pts[0]} L ${pts.slice(1).join(' L ')} Z`
}
