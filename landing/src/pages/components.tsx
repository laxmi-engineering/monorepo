// Shared SVG components for Design 6
// Color scheme: Blue (#2d8fca) = cool/brand, Coral (#f06b7a) = heat/thermal

// Brand blues
const B = {
  light: '#83c4e8',
  mid: '#46a5db',
  base: '#2d8fca',
  dark: '#1e72ab',
  deeper: '#1a5c8b',
} as const

// Coral reds (heat)
const R = {
  light: '#f79aa2',
  mid: '#f06b7a',
  base: '#e5445a',
  dark: '#d12645',
  glow: '#fac1c6',
} as const

// Steel grays (metal body)
const S = {
  lightest: '#e2e8f0',
  lighter: '#cbd5e1',
  light: '#94a3b8',
  mid: '#64748b',
  dark: '#475569',
  darker: '#334155',
  darkest: '#1e293b',
} as const

export const IsometricGrid = () => (
  <div
    className="fixed inset-0 opacity-30 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 20 L 20 10 M 20 10 L 40 20 M 20 10 L 20 30' stroke='%23cbd5e1' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
      backgroundSize: '40px 40px'
    }}
  />
)

/* ═══════════════════════════════════════════════════════════════
   1. IsometricFactory (800×600) — Hero section
   ═══════════════════════════════════════════════════════════════ */
export const IsometricFactory = () => (
  <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="if_smoke" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor={S.lightest} stopOpacity="0.6" />
        <stop offset="100%" stopColor={S.lightest} stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Ground plane — isometric diamond */}
    <path d="M 400 520 L 100 370 L 400 220 L 700 370 Z" fill={S.lightest} stroke={S.lighter} strokeWidth="1" />

    {/* ── Main building ── */}
    {/* Left face (darker) */}
    <path d="M 180 370 L 180 200 L 380 100 L 380 270 Z" fill={S.mid} stroke={S.dark} strokeWidth="2.5" />
    {/* Right face (lighter) */}
    <path d="M 380 270 L 380 100 L 530 175 L 530 345 Z" fill={S.light} stroke={S.dark} strokeWidth="2.5" />
    {/* Top face (lightest) */}
    <path d="M 180 200 L 380 100 L 530 175 L 330 275 Z" fill={S.lighter} stroke={S.dark} strokeWidth="2.5" />
    {/* Roof ridge line */}
    <line x1="380" y1="100" x2="380" y2="270" stroke={S.dark} strokeWidth="2" />

    {/* Windows on left face (dark parallelogram cutouts) */}
    <path d="M 210 230 L 270 200 L 270 240 L 210 270 Z" fill={S.darker} opacity="0.5" />
    <path d="M 210 290 L 270 260 L 270 300 L 210 330 Z" fill={S.darker} opacity="0.5" />
    <path d="M 290 215 L 350 185 L 350 225 L 290 255 Z" fill={S.darker} opacity="0.5" />
    <path d="M 290 275 L 350 245 L 350 285 L 290 315 Z" fill={S.darker} opacity="0.5" />

    {/* Windows on right face */}
    <path d="M 400 170 L 460 200 L 460 240 L 400 210 Z" fill={S.darker} opacity="0.4" />
    <path d="M 400 230 L 460 260 L 460 300 L 400 270 Z" fill={S.darker} opacity="0.4" />
    <path d="M 475 215 L 515 235 L 515 275 L 475 255 Z" fill={S.darker} opacity="0.4" />

    {/* Loading door on left face */}
    <path d="M 310 310 L 360 285 L 360 370 L 310 370 Z" fill={S.darker} opacity="0.6" />

    {/* ── Wing/extension (offset right-back) ── */}
    {/* Left face */}
    <path d="M 530 345 L 530 240 L 630 190 L 630 295 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    {/* Right face */}
    <path d="M 630 295 L 630 190 L 700 225 L 700 330 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
    {/* Top face */}
    <path d="M 530 240 L 630 190 L 700 225 L 600 275 Z" fill={S.lighter} stroke={S.dark} strokeWidth="2" />

    {/* ── Smokestack 1 (tall, left) ── */}
    {/* Cylinder body left */}
    <path d="M 260 195 L 260 80 L 280 70 L 280 185 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    {/* Cylinder body right */}
    <path d="M 280 185 L 280 70 L 300 80 L 300 195 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
    {/* Top ellipse */}
    <ellipse cx="280" cy="75" rx="20" ry="8" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
    {/* Coral glow at top */}
    <ellipse cx="280" cy="77" rx="12" ry="4" fill={R.mid} opacity="0.4" />
    {/* Steam */}
    <ellipse cx="280" cy="58" rx="22" ry="9" fill={S.lightest} opacity="0.55" />
    <ellipse cx="276" cy="42" rx="17" ry="7" fill={S.lightest} opacity="0.4" />
    <ellipse cx="282" cy="28" rx="12" ry="5" fill={S.lightest} opacity="0.25" />

    {/* ── Smokestack 2 (shorter, right) ── */}
    <path d="M 460 170 L 460 100 L 478 90 L 478 160 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    <path d="M 478 160 L 478 90 L 496 100 L 496 170 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
    <ellipse cx="478" cy="95" rx="18" ry="7" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
    <ellipse cx="478" cy="97" rx="10" ry="3.5" fill={R.mid} opacity="0.35" />
    <ellipse cx="478" cy="80" rx="18" ry="7" fill={S.lightest} opacity="0.5" />
    <ellipse cx="475" cy="66" rx="13" ry="5" fill={S.lightest} opacity="0.35" />

    {/* ── Storage tank 1 (coral indicator) ── */}
    {/* Left body */}
    <path d="M 600 370 L 600 300 L 625 288 L 625 358 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    {/* Right body */}
    <path d="M 625 358 L 625 288 L 650 300 L 650 370 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
    {/* Top ellipse */}
    <ellipse cx="625" cy="294" rx="25" ry="10" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
    {/* Coral indicator band */}
    <path d="M 600 330 L 625 318 L 650 330 L 650 345 L 625 333 L 600 345 Z" fill={R.mid} opacity="0.4" />

    {/* ── Storage tank 2 (blue indicator) ── */}
    <path d="M 650 400 L 650 330 L 675 318 L 675 388 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    <path d="M 675 388 L 675 318 L 700 330 L 700 400 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
    <ellipse cx="675" cy="324" rx="25" ry="10" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
    <path d="M 650 360 L 675 348 L 700 360 L 700 375 L 675 363 L 650 375 Z" fill={B.base} opacity="0.35" />

    {/* ── Pipe runs at ground level ── */}
    {/* Hot pipe (coral) */}
    <path d="M 180 380 L 380 280 L 530 355" fill="none" stroke={R.mid} strokeWidth="6" strokeLinecap="round" />
    <path d="M 180 380 L 380 280 L 530 355" fill="none" stroke={R.dark} strokeWidth="6" strokeLinecap="round" opacity="0.15" />
    {/* Cool pipe (blue) */}
    <path d="M 180 395 L 380 295 L 530 370" fill="none" stroke={B.base} strokeWidth="6" strokeLinecap="round" />
    <path d="M 180 395 L 380 295 L 530 370" fill="none" stroke={B.dark} strokeWidth="6" strokeLinecap="round" opacity="0.15" />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   2. IsometricPipeline (600×300) — Process flow with labels
   ═══════════════════════════════════════════════════════════════ */
export const IsometricPipeline = () => (
  <svg viewBox="0 0 600 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Station 1: Raw Material Tank ── */}
    <g>
      {/* Left face */}
      <path d="M 52 155 L 52 90 L 80 76 L 80 141 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
      {/* Right face */}
      <path d="M 80 141 L 80 76 L 108 90 L 108 155 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
      {/* Top ellipse */}
      <ellipse cx="80" cy="83" rx="28" ry="11" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
      {/* Bottom ellipse */}
      <ellipse cx="80" cy="148" rx="28" ry="11" fill={S.mid} stroke={S.dark} strokeWidth="1.5" />
      {/* Coral fill indicator */}
      <path d="M 55 120 L 80 108 L 105 120 L 105 148 L 80 136 L 55 148 Z" fill={R.mid} opacity="0.3" />
      {/* Nozzle on top */}
      <rect x="74" y="68" width="12" height="16" fill={S.darker} stroke={S.dark} strokeWidth="1" rx="2" />
    </g>

    {/* ── Pipe 1 (coral, with arrow) ── */}
    <path d="M 110 122 L 147 122" stroke={R.mid} strokeWidth="6" strokeLinecap="round" />
    <path d="M 138 116 L 148 122 L 138 128" fill="none" stroke={R.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* ── Station 2: Pump ── */}
    <g>
      {/* Isometric cube housing — left */}
      <path d="M 150 145 L 150 100 L 180 86 L 180 131 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
      {/* Right */}
      <path d="M 180 131 L 180 86 L 210 100 L 210 145 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
      {/* Top */}
      <path d="M 150 100 L 180 86 L 210 100 L 180 114 Z" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
      {/* Impeller circle on front (left) face */}
      <circle cx="168" cy="120" r="14" fill={S.lighter} stroke={S.dark} strokeWidth="1.5" />
      <circle cx="168" cy="120" r="8" fill={S.lightest} stroke={S.dark} strokeWidth="1" />
      <circle cx="168" cy="120" r="3" fill={R.mid} />
      {/* Impeller blades */}
      <line x1="168" y1="110" x2="168" y2="130" stroke={S.dark} strokeWidth="1.5" />
      <line x1="158" y1="120" x2="178" y2="120" stroke={S.dark} strokeWidth="1.5" />
    </g>

    {/* ── Pipe 2 (coral, with arrow) ── */}
    <path d="M 212 122 L 250 122" stroke={R.mid} strokeWidth="6" strokeLinecap="round" />
    <path d="M 241 116 L 251 122 L 241 128" fill="none" stroke={R.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* ── Station 3: Heat Exchanger (horizontal cylinder) ── */}
    <g>
      {/* Left cap */}
      <ellipse cx="265" cy="122" rx="10" ry="28" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
      {/* Cylinder body — upper (lighter) */}
      <rect x="265" y="94" width="85" height="28" fill={S.light} stroke={S.dark} strokeWidth="0" />
      {/* Cylinder body — lower (darker) */}
      <rect x="265" y="122" width="85" height="28" fill={S.mid} stroke={S.dark} strokeWidth="0" />
      {/* Top edge */}
      <line x1="265" y1="94" x2="350" y2="94" stroke={S.dark} strokeWidth="2" />
      {/* Bottom edge */}
      <line x1="265" y1="150" x2="350" y2="150" stroke={S.dark} strokeWidth="2" />
      {/* Right cap */}
      <ellipse cx="350" cy="122" rx="10" ry="28" fill={S.mid} stroke={S.dark} strokeWidth="2" />
      {/* Internal R/B tube lines */}
      <line x1="275" y1="106" x2="345" y2="106" stroke={R.mid} strokeWidth="2" strokeLinecap="round" />
      <line x1="275" y1="115" x2="345" y2="115" stroke={R.light} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="275" y1="128" x2="345" y2="128" stroke={B.base} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="275" y1="137" x2="345" y2="137" stroke={B.mid} strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* ── Pipe 3 (blue, with arrow) ── */}
    <path d="M 362 122 L 400 122" stroke={B.base} strokeWidth="6" strokeLinecap="round" />
    <path d="M 391 116 L 401 122 L 391 128" fill="none" stroke={B.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* ── Station 4: Finished Product Tank ── */}
    <g>
      {/* Left face */}
      <path d="M 407 155 L 407 90 L 435 76 L 435 141 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
      {/* Right face */}
      <path d="M 435 141 L 435 76 L 463 90 L 463 155 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
      {/* Top ellipse */}
      <ellipse cx="435" cy="83" rx="28" ry="11" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
      {/* Bottom ellipse */}
      <ellipse cx="435" cy="148" rx="28" ry="11" fill={S.mid} stroke={S.dark} strokeWidth="1.5" />
      {/* Blue fill indicator */}
      <path d="M 410 120 L 435 108 L 460 120 L 460 148 L 435 136 L 410 148 Z" fill={B.base} opacity="0.3" />
      {/* Outlet valve */}
      <rect x="429" y="158" width="12" height="14" fill={S.darker} stroke={S.dark} strokeWidth="1" rx="2" />
    </g>

    {/* ── Labels ── */}
    <g fontSize="11" fontWeight="600" fill="#374155" textAnchor="middle">
      <rect x="45" y="172" width="70" height="22" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" rx="4" />
      <text x="80" y="187">Raw Material</text>

      <rect x="147" y="158" width="66" height="22" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" rx="4" />
      <text x="180" y="173">Pumping</text>

      <rect x="267" y="162" width="80" height="22" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" rx="4" />
      <text x="307" y="177">Heat Exchange</text>

      <rect x="397" y="178" width="76" height="22" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" rx="4" />
      <text x="435" y="193">Finished Product</text>
    </g>
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   3. IsometricMap (500×300) — Global presence
   ═══════════════════════════════════════════════════════════════ */
export const IsometricMap = () => (
  <svg viewBox="0 0 500 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Base — isometric tilted diamond plane */}
    <path d="M 250 30 L 490 150 L 250 270 L 10 150 Z" fill="#f1f5f9" stroke={S.lighter} strokeWidth="1.5" />

    {/* Continent silhouettes painted on tilted plane */}
    {/* Americas */}
    <path d="M 60 130 Q 55 120 58 110 Q 65 100 72 105 Q 78 95 82 100 Q 80 110 85 115 Q 82 125 78 135 Q 72 145 65 150 Q 58 145 60 135 Z" fill={S.lightest} stroke={S.light} strokeWidth="1.5" />

    {/* Europe */}
    <path d="M 190 80 Q 185 75 192 70 Q 200 68 210 72 Q 218 78 215 85 Q 208 90 200 88 Q 193 86 190 82 Z" fill={S.lightest} stroke={S.light} strokeWidth="1.5" />

    {/* Africa */}
    <path d="M 200 110 Q 195 105 198 98 Q 205 92 212 100 Q 218 108 220 120 Q 218 135 212 142 Q 205 145 200 138 Q 196 128 198 118 Z" fill={S.lightest} stroke={S.light} strokeWidth="1.5" />

    {/* Middle East */}
    <path d="M 248 95 Q 242 90 245 84 Q 252 80 260 85 Q 265 92 262 100 Q 256 105 250 100 Z" fill={S.lightest} stroke={S.light} strokeWidth="1.5" />

    {/* India — highlighted */}
    <path d="M 290 105 Q 282 100 280 110 Q 278 122 282 135 Q 290 148 298 145 Q 305 138 308 125 Q 310 112 305 102 Q 298 96 292 100 Z" fill={S.lighter} stroke={S.mid} strokeWidth="2.5" />

    {/* SE Asia */}
    <path d="M 330 120 Q 325 115 328 108 Q 335 102 342 110 Q 348 118 345 128 Q 340 135 333 130 Z" fill={S.lightest} stroke={S.light} strokeWidth="1.5" />

    {/* East Asia */}
    <path d="M 340 80 Q 335 75 340 68 Q 350 62 360 70 Q 368 78 365 88 Q 358 95 350 90 Q 342 86 340 80 Z" fill={S.lightest} stroke={S.light} strokeWidth="1.5" />

    {/* Australia */}
    <path d="M 380 160 Q 375 155 380 148 Q 390 142 400 150 Q 408 158 405 168 Q 398 175 390 170 Q 382 165 380 160 Z" fill={S.lightest} stroke={S.light} strokeWidth="1.5" />

    {/* ── Bhopal HQ beacon (coral) ── */}
    <circle cx="292" cy="125" r="12" fill="none" stroke={R.mid} strokeWidth="1.5" opacity="0.3" />
    <circle cx="292" cy="125" r="7" fill={R.mid} stroke={R.dark} strokeWidth="2" />
    <circle cx="292" cy="125" r="3" fill={R.dark} />
    {/* Pulse ring */}
    <circle cx="292" cy="125" r="18" fill="none" stroke={R.mid} strokeWidth="1" opacity="0.2" />

    {/* ── Dashed connection lines from HQ to clients ── */}
    <g stroke={B.base} strokeWidth="1.5" fill="none" strokeDasharray="5,4" opacity="0.5">
      <path d="M 292 125 Q 265 105 248 95" />
      <path d="M 292 125 Q 245 130 210 125" />
      <path d="M 292 125 Q 315 118 335 115" />
      <path d="M 292 125 Q 340 145 390 158" />
      <path d="M 292 125 Q 320 95 352 80" />
      <path d="M 292 125 Q 240 90 200 82" />
    </g>

    {/* ── Client dots — small isometric cubes in B.base ── */}
    {[
      [248, 95], [210, 125], [335, 115], [390, 158], [352, 80], [200, 82]
    ].map(([cx, cy], i) => (
      <g key={i}>
        {/* Tiny isometric cube */}
        <path d={`M ${cx} ${cy+3} L ${cx-4} ${cy+1} L ${cx} ${cy-1} L ${cx+4} ${cy+1} Z`} fill={B.base} stroke={B.dark} strokeWidth="0.8" />
        <path d={`M ${cx} ${cy-1} L ${cx-4} ${cy+1} L ${cx-4} ${cy-3} L ${cx} ${cy-5} Z`} fill={B.dark} strokeWidth="0" />
        <path d={`M ${cx} ${cy-1} L ${cx+4} ${cy+1} L ${cx+4} ${cy-3} L ${cx} ${cy-5} Z`} fill={B.mid} strokeWidth="0" />
      </g>
    ))}

    {/* ── Legend ── */}
    <g>
      <circle cx="385" cy="235" r="5" fill={R.mid} stroke={R.dark} strokeWidth="1" />
      <text x="395" y="239" fontSize="11" fill={S.dark} fontWeight="600">HQ - Bhopal</text>
      <rect x="381" y="251" width="8" height="6" fill={B.base} stroke={B.dark} strokeWidth="0.5" />
      <text x="395" y="259" fontSize="11" fill={S.dark} fontWeight="600">Client Locations</text>
    </g>
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   4. IsometricHeatExchanger (200×200) — Shell & tube
   ═══════════════════════════════════════════════════════════════ */
export const IsometricHeatExchanger = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Shell body — horizontal isometric cylinder ── */}
    {/* Upper half (lighter) */}
    <path d="M 35 100 L 35 72 C 35 58 55 50 75 50 L 125 50 C 145 50 165 58 165 72 L 165 100" fill={S.light} stroke="none" />
    {/* Lower half (darker) */}
    <path d="M 35 100 L 35 128 C 35 142 55 150 75 150 L 125 150 C 145 150 165 142 165 128 L 165 100" fill={S.mid} stroke="none" />
    {/* Outline */}
    <path d="M 35 72 C 35 58 55 50 75 50 L 125 50 C 145 50 165 58 165 72 L 165 128 C 165 142 145 150 125 150 L 75 150 C 55 150 35 142 35 128 Z" fill="none" stroke={S.dark} strokeWidth="2" />

    {/* Left tube sheet cap */}
    <ellipse cx="40" cy="100" rx="10" ry="32" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
    {/* Right tube sheet cap */}
    <ellipse cx="160" cy="100" rx="10" ry="32" fill={S.mid} stroke={S.dark} strokeWidth="2" />

    {/* Tube sheet flanges (S.darker bands) */}
    <rect x="48" y="67" width="5" height="66" fill={S.darker} stroke={S.dark} strokeWidth="1" rx="1" />
    <rect x="147" y="67" width="5" height="66" fill={S.darker} stroke={S.dark} strokeWidth="1" rx="1" />

    {/* Tube bundle circles visible on left tube sheet */}
    {[[36, 86], [44, 86], [36, 100], [44, 100], [36, 114], [44, 114], [40, 93], [40, 107]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="2.5" fill={i < 4 ? R.mid : B.base} stroke={S.dark} strokeWidth="0.5" opacity="0.8" />
    ))}

    {/* Internal tube lines (R and B) visible through body */}
    <line x1="53" y1="80" x2="147" y2="80" stroke={R.mid} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <line x1="53" y1="90" x2="147" y2="90" stroke={R.light} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="53" y1="100" x2="147" y2="100" stroke={R.mid} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <line x1="53" y1="110" x2="147" y2="110" stroke={B.base} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="53" y1="120" x2="147" y2="120" stroke={B.mid} strokeWidth="2" strokeLinecap="round" opacity="0.7" />

    {/* ── 4 Nozzles ── */}
    {/* Top-left: hot in (R.mid) */}
    <rect x="60" y="45" width="18" height="12" rx="2" fill={R.mid} stroke={R.dark} strokeWidth="1.5" />
    <rect x="63" y="38" width="12" height="9" rx="2" fill={R.light} stroke={R.dark} strokeWidth="1" />
    {/* Top-right: cold out (B.base) */}
    <rect x="122" y="45" width="18" height="12" rx="2" fill={B.base} stroke={B.dark} strokeWidth="1.5" />
    <rect x="125" y="38" width="12" height="9" rx="2" fill={B.light} stroke={B.dark} strokeWidth="1" />
    {/* Bottom-left: cold in (B.base) */}
    <rect x="60" y="143" width="18" height="12" rx="2" fill={B.base} stroke={B.dark} strokeWidth="1.5" />
    {/* Bottom-right: hot out (R.mid) */}
    <rect x="122" y="143" width="18" height="12" rx="2" fill={R.mid} stroke={R.dark} strokeWidth="1.5" />

    {/* ── Support saddles (isometric trapezoids) ── */}
    <path d="M 55 155 L 50 170 L 90 170 L 85 155" fill={S.dark} stroke={S.darker} strokeWidth="1.5" />
    <path d="M 115 155 L 110 170 L 150 170 L 145 155" fill={S.dark} stroke={S.darker} strokeWidth="1.5" />
    {/* Base plates */}
    <rect x="47" y="169" width="46" height="4" rx="1" fill={S.darker} />
    <rect x="107" y="169" width="46" height="4" rx="1" fill={S.darker} />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   5. IsometricCoolingTower (200×200) — Hyperboloid
   ═══════════════════════════════════════════════════════════════ */
export const IsometricCoolingTower = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Tower body — hyperboloid left half (darker) ── */}
    <path
      d="M 65 165 Q 58 145 68 118 Q 74 100 78 85 Q 82 70 86 55 L 100 55 L 100 165 Z"
      fill={S.mid} stroke={S.dark} strokeWidth="2"
    />
    {/* Tower body — right half (lighter) */}
    <path
      d="M 100 55 L 114 55 Q 118 70 122 85 Q 126 100 132 118 Q 142 145 135 165 L 100 165 Z"
      fill={S.light} stroke={S.dark} strokeWidth="2"
    />

    {/* ── Top opening — isometric ellipse ── */}
    <ellipse cx="100" cy="55" rx="16" ry="6" fill={S.lighter} stroke={S.dark} strokeWidth="2" />

    {/* ── Structural ring ellipses at 1/3 and 2/3 height ── */}
    <ellipse cx="100" cy="90" rx="22" ry="6" fill="none" stroke={S.dark} strokeWidth="1.2" opacity="0.45" />
    <ellipse cx="100" cy="125" rx="28" ry="7" fill="none" stroke={S.dark} strokeWidth="1.2" opacity="0.45" />

    {/* ── Base — isometric flat box ── */}
    {/* Left face */}
    <path d="M 50 170 L 50 164 L 100 150 L 100 170 Z" fill={S.darker} stroke={S.dark} strokeWidth="2" />
    {/* Right face */}
    <path d="M 100 170 L 100 150 L 150 164 L 150 170 Z" fill={S.dark} stroke={S.dark} strokeWidth="2" />
    {/* Top face */}
    <path d="M 50 164 L 100 150 L 150 164 L 100 178 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    {/* Blue water basin stripe */}
    <path d="M 58 167 L 100 155 L 142 167 L 100 175 Z" fill={B.base} opacity="0.4" />

    {/* ── 4 Support columns ── */}
    <line x1="68" y1="165" x2="73" y2="155" stroke={S.dark} strokeWidth="3" strokeLinecap="round" />
    <line x1="88" y1="167" x2="88" y2="155" stroke={S.dark} strokeWidth="3" strokeLinecap="round" />
    <line x1="112" y1="167" x2="112" y2="155" stroke={S.dark} strokeWidth="3" strokeLinecap="round" />
    <line x1="132" y1="165" x2="127" y2="155" stroke={S.dark} strokeWidth="3" strokeLinecap="round" />

    {/* ── Steam ellipses rising from top opening ── */}
    <ellipse cx="100" cy="42" rx="20" ry="7" fill={S.lightest} opacity="0.55" />
    <ellipse cx="97" cy="30" rx="15" ry="5.5" fill={S.lightest} opacity="0.4" />
    <ellipse cx="103" cy="19" rx="11" ry="4" fill={S.lightest} opacity="0.25" />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   6. IsometricBoiler (200×200) — Vertical cylinder + firebox
   ═══════════════════════════════════════════════════════════════ */
export const IsometricBoiler = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Main vessel — vertical isometric cylinder ── */}
    {/* Left half (darker) */}
    <path d="M 60 130 L 60 60 Q 60 42 100 42 L 100 130 Z" fill={S.mid} stroke="none" />
    {/* Right half (lighter) */}
    <path d="M 100 130 L 100 42 Q 140 42 140 60 L 140 130 Z" fill={S.light} stroke="none" />
    {/* Outline */}
    <path d="M 60 60 Q 60 42 100 38 Q 140 42 140 60 L 140 130 Q 140 148 100 152 Q 60 148 60 130 Z" fill="none" stroke={S.dark} strokeWidth="2" />
    {/* Top dome (S.lighter) */}
    <ellipse cx="100" cy="56" rx="40" ry="16" fill={S.lighter} stroke={S.dark} strokeWidth="2" />

    {/* ── 2 Ring detail ellipses at 1/3 and 2/3 height ── */}
    <ellipse cx="100" cy="80" rx="40" ry="16" fill="none" stroke={S.dark} strokeWidth="0.8" opacity="0.35" />
    <ellipse cx="100" cy="110" rx="40" ry="16" fill="none" stroke={S.dark} strokeWidth="0.8" opacity="0.35" />

    {/* ── Coral heat zone glow band on lower third ── */}
    <path d="M 60 108 Q 60 100 100 96 Q 140 100 140 108 L 140 130 Q 140 138 100 142 Q 60 138 60 130 Z" fill={R.mid} opacity="0.3" />

    {/* ── Firebox — isometric box at base ── */}
    {/* Left face */}
    <path d="M 65 165 L 65 148 L 100 138 L 100 155 Z" fill={S.darker} stroke={S.dark} strokeWidth="1.5" />
    {/* Right face */}
    <path d="M 100 155 L 100 138 L 135 148 L 135 165 Z" fill={S.dark} stroke={S.dark} strokeWidth="1.5" />
    {/* Top face */}
    <path d="M 65 148 L 100 138 L 135 148 L 100 158 Z" fill={S.mid} stroke={S.dark} strokeWidth="1.5" />
    {/* Flame paths inside firebox (on left face) */}
    <path d="M 75 164 Q 78 156 82 162 Q 85 154 88 160 Q 91 152 95 162" fill="none" stroke={R.mid} strokeWidth="2" strokeLinecap="round" />
    <path d="M 80 164 Q 83 158 86 163 Q 89 156 92 163" fill="none" stroke={R.base} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

    {/* ── Steam outlet pipe — vertical cylinder on top ── */}
    <rect x="94" y="30" width="12" height="22" fill={S.mid} stroke={S.dark} strokeWidth="1.5" rx="2" />
    <ellipse cx="100" cy="30" rx="7" ry="3" fill={S.lighter} stroke={S.dark} strokeWidth="1" />
    {/* Steam wisps */}
    <ellipse cx="100" cy="21" rx="11" ry="4" fill={S.lightest} opacity="0.5" />
    <ellipse cx="98" cy="13" rx="8" ry="3" fill={S.lightest} opacity="0.35" />

    {/* ── Water inlet — horizontal tube on right (B.base) ── */}
    <rect x="138" y="92" width="22" height="8" rx="3" fill={B.base} stroke={B.dark} strokeWidth="1.5" />

    {/* ── Pressure gauge on left face ── */}
    <circle cx="68" cy="82" r="8" fill={S.darkest} stroke={S.dark} strokeWidth="1.5" />
    <circle cx="68" cy="82" r="5" fill="#0f172a" />
    <line x1="68" y1="82" x2="72" y2="78" stroke={R.mid} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="68" cy="82" r="1.5" fill={R.mid} />

    {/* ── 2 Support legs with base plates ── */}
    <rect x="70" y="165" width="6" height="14" fill={S.dark} />
    <rect x="124" y="165" width="6" height="14" fill={S.dark} />
    <rect x="66" y="177" width="14" height="4" rx="1" fill={S.darker} />
    <rect x="120" y="177" width="14" height="4" rx="1" fill={S.darker} />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   7. IsometricPressureVessel (200×200) — Vertical vessel
   ═══════════════════════════════════════════════════════════════ */
export const IsometricPressureVessel = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Main body — vertical isometric cylinder ── */}
    {/* Left half (S.mid) */}
    <path d="M 65 145 L 65 60 Q 65 42 100 38 L 100 145 Z" fill={S.mid} stroke="none" />
    {/* Right half (S.light) */}
    <path d="M 100 145 L 100 38 Q 135 42 135 60 L 135 145 Z" fill={S.light} stroke="none" />
    {/* Outline */}
    <path d="M 65 60 Q 65 42 100 38 Q 135 42 135 60 L 135 145 Q 135 163 100 167 Q 65 163 65 145 Z" fill="none" stroke={S.dark} strokeWidth="2.5" />

    {/* ── Top hemispherical dome (S.lighter) ── */}
    <path d="M 65 60 Q 65 30 100 22 Q 135 30 135 60" fill={S.lighter} stroke={S.dark} strokeWidth="2.5" />

    {/* ── Bottom dished head (S.mid) ── */}
    <path d="M 65 145 Q 65 170 100 178 Q 135 170 135 145" fill={S.mid} stroke={S.dark} strokeWidth="2.5" />

    {/* ── 3 Weld seam line ellipses ── */}
    <ellipse cx="100" cy="60" rx="35" ry="14" fill="none" stroke={S.dark} strokeWidth="1" opacity="0.3" />
    <ellipse cx="100" cy="100" rx="35" ry="14" fill="none" stroke={S.dark} strokeWidth="1" opacity="0.3" />
    <ellipse cx="100" cy="145" rx="35" ry="14" fill="none" stroke={S.dark} strokeWidth="1" opacity="0.3" />

    {/* ── Safety valve on top (R.mid with R.base cap) ── */}
    <rect x="95" y="14" width="10" height="14" fill={R.mid} stroke={R.dark} strokeWidth="1.5" rx="2" />
    <rect x="92" y="8" width="16" height="8" fill={R.base} stroke={R.dark} strokeWidth="1" rx="2" />

    {/* ── Pressure gauge on left face ── */}
    <circle cx="56" cy="92" r="10" fill={S.darkest} stroke={S.dark} strokeWidth="1.5" />
    <circle cx="56" cy="92" r="7" fill="#0f172a" />
    <line x1="56" y1="92" x2="60" y2="87" stroke={R.mid} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="56" cy="92" r="1.5" fill={R.mid} />
    {/* Connection pipe */}
    <rect x="64" y="89" width="4" height="6" fill={S.dark} />

    {/* ── Inlet nozzle (B.base) on right face ── */}
    <rect x="133" y="72" width="20" height="10" fill={B.base} stroke={B.dark} strokeWidth="1.5" rx="2" />
    <rect x="151" y="69" width="8" height="16" fill={B.light} stroke={B.dark} strokeWidth="1" rx="2" />

    {/* ── Outlet nozzle (R.mid) on right face ── */}
    <rect x="133" y="120" width="20" height="10" fill={R.mid} stroke={R.dark} strokeWidth="1.5" rx="2" />
    <rect x="151" y="117" width="8" height="16" fill={R.light} stroke={R.dark} strokeWidth="1" rx="2" />

    {/* ── Support skirt — isometric trapezoid at bottom ── */}
    <path d="M 75 175 L 68 192 L 132 192 L 125 175" fill={S.dark} stroke={S.darker} strokeWidth="1.5" />
    <rect x="65" y="191" width="70" height="4" rx="1" fill={S.darker} />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   8. IsometricDeaerator (200×200) — Horizontal tank + dome
   ═══════════════════════════════════════════════════════════════ */
export const IsometricDeaerator = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Horizontal isometric cylinder (main tank) ── */}
    {/* Upper half (lighter) */}
    <path d="M 40 108 L 40 85 C 40 72 55 65 75 65 L 125 65 C 145 65 160 72 160 85 L 160 108" fill={S.light} stroke="none" />
    {/* Lower half (darker) */}
    <path d="M 40 108 L 40 131 C 40 144 55 151 75 151 L 125 151 C 145 151 160 144 160 131 L 160 108" fill={S.mid} stroke="none" />
    {/* Outline */}
    <path d="M 40 85 C 40 72 55 65 75 65 L 125 65 C 145 65 160 72 160 85 L 160 131 C 160 144 145 151 125 151 L 75 151 C 55 151 40 144 40 131 Z" fill="none" stroke={S.dark} strokeWidth="2" />

    {/* Left cap */}
    <ellipse cx="45" cy="108" rx="9" ry="28" fill={S.lighter} stroke={S.dark} strokeWidth="2" />
    {/* Right cap */}
    <ellipse cx="155" cy="108" rx="9" ry="28" fill={S.mid} stroke={S.dark} strokeWidth="2" />

    {/* Coral steam band near top */}
    <path d="M 50 78 L 150 78 L 150 90 L 50 90 Z" fill={R.mid} opacity="0.4" />
    {/* Blue water band near bottom */}
    <path d="M 50 126 L 150 126 L 150 138 L 50 138 Z" fill={B.base} opacity="0.35" />

    {/* ── Deaeration dome — smaller vertical cylinder on top ── */}
    {/* Left half */}
    <path d="M 82 62 L 82 38 Q 82 28 100 28 L 100 62 Z" fill={S.mid} stroke="none" />
    {/* Right half */}
    <path d="M 100 62 L 100 28 Q 118 28 118 38 L 118 62 Z" fill={S.light} stroke="none" />
    {/* Outline */}
    <path d="M 82 38 Q 82 28 100 24 Q 118 28 118 38 L 118 62" fill="none" stroke={S.dark} strokeWidth="1.5" />
    <path d="M 82 38 L 82 62" fill="none" stroke={S.dark} strokeWidth="1.5" />
    {/* Dome top cap */}
    <ellipse cx="100" cy="33" rx="18" ry="7" fill={S.lighter} stroke={S.dark} strokeWidth="1.5" />

    {/* ── Steam inlet nozzle on dome top (R.mid) ── */}
    <rect x="95" y="18" width="10" height="12" fill={R.mid} stroke={R.dark} strokeWidth="1" rx="2" />
    <rect x="93" y="14" width="14" height="6" fill={R.light} stroke={R.dark} strokeWidth="1" rx="2" />

    {/* ── Hot inlet pipe (left, R.mid) ── */}
    <rect x="28" y="102" width="16" height="8" rx="3" fill={R.mid} stroke={R.dark} strokeWidth="1.5" />
    {/* ── Cool outlet pipe (right, B.base) ── */}
    <rect x="156" y="102" width="16" height="8" rx="3" fill={B.base} stroke={B.dark} strokeWidth="1.5" />

    {/* ── 2 Support legs with base plates ── */}
    <rect x="70" y="148" width="6" height="22" fill={S.dark} />
    <rect x="124" y="148" width="6" height="22" fill={S.dark} />
    <rect x="65" y="168" width="16" height="4" rx="1" fill={S.darker} />
    <rect x="119" y="168" width="16" height="4" rx="1" fill={S.darker} />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   9. IsometricFinnedTube (200×200) — Tube with fins
   ═══════════════════════════════════════════════════════════════ */
export const IsometricFinnedTube = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Central horizontal isometric tube (thin) ── */}
    <rect x="30" y="94" width="140" height="12" rx="6" fill={S.mid} stroke={S.dark} strokeWidth="2" />

    {/* ── 14 isometric elliptical fins (disc-shaped rings) ── */}
    {Array.from({ length: 14 }).map((_, i) => {
      const t = i / 13
      const isHot = t < 0.5
      const fill = isHot ? (i % 2 === 0 ? R.mid : R.light) : (i % 2 === 0 ? B.base : B.mid)
      const cx = 36 + i * 9.2
      return (
        <ellipse
          key={i}
          cx={cx}
          cy={100}
          rx="3"
          ry="18"
          fill={fill}
          stroke={isHot ? R.dark : B.dark}
          strokeWidth="1"
          opacity={0.6 + Math.abs(0.5 - t) * 0.6}
        />
      )
    })}

    {/* ── End caps ── */}
    <ellipse cx="30" cy="100" rx="6" ry="16" fill={R.light} stroke={R.dark} strokeWidth="1.5" />
    <ellipse cx="170" cy="100" rx="6" ry="16" fill={B.light} stroke={B.dark} strokeWidth="1.5" />

    {/* ── Flow direction arrow along tube center ── */}
    <path d="M 80 100 L 120 100" fill="none" stroke={S.lightest} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 115 96 L 121 100 L 115 104" fill="none" stroke={S.lightest} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Hot/cold side indicator dots */}
    <circle cx="30" cy="76" r="3" fill={R.mid} />
    <circle cx="170" cy="76" r="3" fill={B.base} />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   10. IsometricCondenser (200×200) — Large box with tubes
   ═══════════════════════════════════════════════════════════════ */
export const IsometricCondenser = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Main isometric box ── */}
    {/* Left face (S.mid) */}
    <path d="M 40 140 L 40 65 L 100 35 L 100 110 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    {/* Right face (S.light) */}
    <path d="M 100 110 L 100 35 L 160 65 L 160 140 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
    {/* Top face (S.lighter) */}
    <path d="M 40 65 L 100 35 L 160 65 L 100 95 Z" fill={S.lighter} stroke={S.dark} strokeWidth="2" />

    {/* ── Internal tube lines on left face (R.mid/R.light, parallelogram angle) ── */}
    <line x1="50" y1="78" x2="93" y2="55" stroke={R.mid} strokeWidth="2" opacity="0.7" strokeLinecap="round" />
    <line x1="50" y1="90" x2="93" y2="67" stroke={R.light} strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
    <line x1="50" y1="102" x2="93" y2="79" stroke={R.mid} strokeWidth="2" opacity="0.7" strokeLinecap="round" />
    <line x1="50" y1="114" x2="93" y2="91" stroke={R.light} strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />

    {/* ── Cooling water lines on right face (B.base/B.light) ── */}
    <line x1="107" y1="52" x2="153" y2="77" stroke={B.base} strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
    <line x1="107" y1="67" x2="153" y2="92" stroke={B.light} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    <line x1="107" y1="82" x2="153" y2="107" stroke={B.base} strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

    {/* ── Steam inlet — vertical cylinder on top face with coral cap ── */}
    <rect x="90" y="20" width="20" height="16" fill={S.mid} stroke={S.dark} strokeWidth="1.5" rx="2" />
    <ellipse cx="100" cy="20" rx="10" ry="4" fill={R.mid} stroke={R.dark} strokeWidth="1" />

    {/* ── Coolant outlet — horizontal tube from right face (B.base) ── */}
    <rect x="157" y="92" width="18" height="9" fill={B.base} stroke={B.dark} strokeWidth="1.5" rx="2" />

    {/* ── Condensate outlet — downward nozzle from bottom (B.base) ── */}
    <rect x="94" y="110" width="12" height="16" fill={B.base} stroke={B.dark} strokeWidth="1.5" rx="2" />

    {/* ── 2 Support legs with base plates ── */}
    <rect x="55" y="140" width="6" height="22" fill={S.dark} />
    <rect x="138" y="140" width="6" height="22" fill={S.dark} />
    <rect x="50" y="160" width="16" height="4" rx="1" fill={S.darker} />
    <rect x="133" y="160" width="16" height="4" rx="1" fill={S.darker} />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   11. IsometricAirCooler (200×200) — Fan on top of box
   ═══════════════════════════════════════════════════════════════ */
export const IsometricAirCooler = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* ── Support frame — isometric box ── */}
    {/* Left face (S.mid) */}
    <path d="M 35 155 L 35 100 L 100 68 L 100 123 Z" fill={S.mid} stroke={S.dark} strokeWidth="2" />
    {/* Right face (S.light) */}
    <path d="M 100 123 L 100 68 L 165 100 L 165 155 Z" fill={S.light} stroke={S.dark} strokeWidth="2" />
    {/* Top face (S.lighter) */}
    <path d="M 35 100 L 100 68 L 165 100 L 100 132 Z" fill={S.lighter} stroke={S.dark} strokeWidth="2" />

    {/* ── Fan housing — isometric ellipse on top face ── */}
    <ellipse cx="100" cy="100" rx="32" ry="17" fill="#e5e7eb" stroke={S.dark} strokeWidth="2" />

    {/* ── Fan blades — X-pattern lines ── */}
    <line x1="80" y1="92" x2="120" y2="108" stroke={S.dark} strokeWidth="3" strokeLinecap="round" />
    <line x1="80" y1="108" x2="120" y2="92" stroke={S.dark} strokeWidth="3" strokeLinecap="round" />
    {/* Fan hub (R.mid) */}
    <circle cx="100" cy="100" r="6" fill={R.mid} stroke={R.dark} strokeWidth="1.5" />

    {/* ── Finned tube bank — 4 lines on left face (R → B gradient) ── */}
    <line x1="45" y1="138" x2="92" y2="113" stroke={R.mid} strokeWidth="2" strokeLinecap="round" />
    <line x1="45" y1="145" x2="92" y2="120" stroke={R.light} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="50" y1="150" x2="95" y2="126" stroke={B.base} strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="155" x2="95" y2="131" stroke={B.light} strokeWidth="1.5" strokeLinecap="round" />

    {/* ── Hot inlet pipe (left, R.mid) ── */}
    <rect x="22" y="120" width="16" height="7" fill={R.mid} stroke={R.dark} strokeWidth="1" rx="2" />
    {/* ── Cool outlet pipe (right, B.base) ── */}
    <rect x="162" y="120" width="16" height="7" fill={B.base} stroke={B.dark} strokeWidth="1" rx="2" />

    {/* ── Air flow arrows above fan (B.base, decreasing opacity) ── */}
    <path d="M 100 80 L 100 62 M 96 66 L 100 62 L 104 66" fill="none" stroke={B.base} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M 86 85 L 82 69 M 78 73 L 82 69 L 86 73" fill="none" stroke={B.base} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <path d="M 114 85 L 118 69 M 114 73 L 118 69 L 122 73" fill="none" stroke={B.base} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
)
