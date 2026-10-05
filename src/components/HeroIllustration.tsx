import React from 'react';

/**
 * Premium 3D Isometric ACM Visual
 * Optimized viewBox (70 -10 400 440) to completely eliminate all outer margin whitespace.
 */
export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Soft Glow aura behind the 3D visual */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/25 via-sky-300/25 to-indigo-400/20 rounded-full blur-2xl transform scale-100 -z-10 pointer-events-none" />

      <svg
        viewBox="70 -10 400 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl select-none"
      >
        <defs>
          {/* Glowing Filters */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.145  0 0 0 0 0.388  0 0 0 0 0.921  0 0 0 0.4 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="dropShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#1E3A8A" floodOpacity="0.14" />
          </filter>

          {/* Facet Gradients */}
          <linearGradient id="topFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          <linearGradient id="leftFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="rightFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="60%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          <linearGradient id="topPrismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>

          <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#E0F2FE" />
            <stop offset="65%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </radialGradient>

          <linearGradient id="acmBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>

        {/* ================= ISOMETRIC FLOOR GRID & SHADOW ================= */}
        <g opacity="0.45">
          <polygon
            points="270,420 450,320 270,220 90,320"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <ellipse cx="270" cy="320" rx="140" ry="75" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.3" />
          <ellipse cx="270" cy="320" rx="190" ry="100" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="6 6" opacity="0.25" />
          <ellipse cx="270" cy="350" rx="130" ry="45" fill="#1E3A8A" opacity="0.18" filter="url(#softGlow)" />
        </g>

        {/* ================= BACK ORBITING ELEMENTS ================= */}
        <g transform="rotate(-15 270 240)">
          <ellipse cx="270" cy="240" rx="200" ry="80" fill="none" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="8 8" opacity="0.35" />
        </g>
        <g transform="rotate(25 270 240)">
          <ellipse cx="270" cy="240" rx="175" ry="68" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
        </g>

        <circle cx="90" cy="180" r="4" fill="#38BDF8" opacity="0.75" filter="url(#neonGlow)" />
        <circle cx="450" cy="160" r="3" fill="#60A5FA" opacity="0.6" />
        <circle cx="140" cy="370" r="5" fill="#2563EB" opacity="0.5" />

        {/* ================= LAYER 1: BASE CRYSTAL PEDESTAL ================= */}
        <polygon points="270,390 390,320 270,250 150,320" fill="#1E3A8A" opacity="0.4" />
        <polygon points="150,320 270,390 270,355 150,285" fill="#1D4ED8" opacity="0.8" />
        <polygon points="270,390 390,320 390,285 270,355" fill="#1E40AF" opacity="0.9" />

        {/* ================= LAYER 2: MAIN MULTI-FACETED CRYSTAL CUBE ================= */}
        <g filter="url(#dropShadow)">
          <polygon points="140,260 270,335 270,175 140,100" fill="url(#leftFaceGrad)" />
          <polygon points="140,260 210,300 210,140 140,100" fill="#2563EB" opacity="0.35" />
          <polygon points="210,300 270,335 270,175 210,140" fill="#1D4ED8" opacity="0.4" />

          <polygon points="270,335 400,260 400,100 270,175" fill="url(#rightFaceGrad)" />
          <polygon points="270,335 335,297 335,137 270,175" fill="#1E40AF" opacity="0.4" />
          <polygon points="335,297 400,260 400,100 335,137" fill="#1E3A8A" opacity="0.5" />

          <polygon points="140,100 270,175 400,100 270,25" fill="url(#topFaceGrad)" />
          <polygon points="140,100 270,175 270,100" fill="#93C5FD" opacity="0.3" />
          <polygon points="270,175 400,100 270,100" fill="#60A5FA" opacity="0.25" />
          <polygon points="140,100 270,25 270,100" fill="#E0F2FE" opacity="0.4" />
        </g>

        {/* ================= LAYER 3: INNER GLOW & CUTOUT MATRIX ================= */}
        <line x1="270" y1="25" x2="270" y2="335" stroke="#7DD3FC" strokeWidth="1.5" opacity="0.65" />
        <line x1="140" y1="100" x2="400" y2="260" stroke="#60A5FA" strokeWidth="0.75" opacity="0.35" />
        <line x1="400" y1="100" x2="140" y2="260" stroke="#60A5FA" strokeWidth="0.75" opacity="0.35" />

        <polyline points="140,100 270,175 400,100" stroke="url(#edgeGlow)" strokeWidth="2.5" strokeLinecap="round" filter="url(#neonGlow)" />
        <polyline points="140,100 270,25 400,100" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="270" y1="175" x2="270" y2="335" stroke="url(#edgeGlow)" strokeWidth="2" strokeLinecap="round" />

        <polygon points="150,110 260,173 260,250 150,187" fill="#FFFFFF" opacity="0.12" />

        {/* ================= LAYER 4: FLOATING CROWN PRISM ================= */}
        <g transform="translate(0, -36)" filter="url(#dropShadow)">
          <polygon points="270,20 340,55 270,90 200,55" fill="url(#topPrismGrad)" opacity="0.95" />
          <polygon points="200,55 270,90 270,115 200,80" fill="#3B82F6" opacity="0.85" />
          <polygon points="270,90 340,55 340,80 270,115" fill="#1D4ED8" opacity="0.9" />
          <polygon points="270,20 340,55 270,90 200,55" fill="none" stroke="#E0F2FE" strokeWidth="1.5" filter="url(#neonGlow)" />
        </g>

        <line x1="270" y1="20" x2="270" y2="100" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />

        {/* ================= LAYER 5: METALLIC SPHERE & ACM EMBLEM ================= */}
        <g transform="translate(105, 140)" filter="url(#dropShadow)">
          <circle cx="0" cy="0" r="22" fill="url(#sphereGrad)" />
          <circle cx="-6" cy="-7" r="6" fill="#FFFFFF" opacity="0.6" />
          <ellipse cx="0" cy="0" rx="30" ry="12" fill="none" stroke="#7DD3FC" strokeWidth="1" transform="rotate(-20)" opacity="0.6" />
        </g>

        <g transform="translate(425, 200)" filter="url(#dropShadow)">
          <polygon points="0,-16 14,-8 0,0 -14,-8" fill="#BAE6FD" />
          <polygon points="-14,-8 0,0 0,16 -14,8" fill="#3B82F6" />
          <polygon points="0,0 14,-8 14,8 0,16" fill="#1D4ED8" />
          <polygon points="0,-16 14,-8 0,0 -14,-8" fill="none" stroke="#7DD3FC" strokeWidth="1" />
        </g>

        <g transform="translate(270, 215)" filter="url(#dropShadow)">
          <circle cx="0" cy="0" r="44" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
          <circle cx="0" cy="0" r="38" fill="#1E3A8A" opacity="0.9" />
          <circle cx="0" cy="0" r="35" fill="url(#acmBadgeGrad)" stroke="#60A5FA" strokeWidth="2" />
          <circle cx="0" cy="0" r="30" fill="none" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />

          <text
            x="0"
            y="3"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFFFFF"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="900"
            fontSize="16"
            letterSpacing="2.5"
          >
            ACM
          </text>
          <text
            x="0"
            y="17"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#93C5FD"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="600"
            fontSize="7"
            letterSpacing="1"
          >
            NMIET
          </text>
        </g>

        {/* ================= LAYER 6: FOREGROUND ORBITING NODES ================= */}
        <g transform="translate(370, 310)">
          <circle cx="0" cy="0" r="6" fill="#38BDF8" filter="url(#neonGlow)" />
          <circle cx="0" cy="0" r="10" fill="none" stroke="#7DD3FC" strokeWidth="1" opacity="0.5" />
        </g>

        <g transform="translate(160, 290)">
          <circle cx="0" cy="0" r="4.5" fill="#60A5FA" filter="url(#neonGlow)" />
        </g>

        <g opacity="0.5" stroke="#93C5FD" strokeWidth="0.8">
          <g transform="translate(450, 75)">
            <line x1="-8" y1="0" x2="8" y2="0" />
            <line x1="0" y1="-8" x2="0" y2="8" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="2 2" />
          </g>
          <g transform="translate(70, 390)">
            <line x1="-8" y1="0" x2="8" y2="0" />
            <line x1="0" y1="-8" x2="0" y2="8" />
          </g>
        </g>

        <line x1="270" y1="335" x2="270" y2="420" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        <circle cx="270" cy="420" r="3" fill="#3B82F6" opacity="0.6" />
      </svg>

      {/* ================= TIGHT REFINED FLOATING CODE CARDS ================= */}
      <div className="absolute top-0 right-0 sm:right-1 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-lg px-2.5 py-1.5 shadow-md text-slate-700 font-mono text-[10px] leading-snug hidden sm:block">
        <div className="flex items-center gap-1 mb-0.5 border-b border-slate-100 pb-0.5 text-[9px] text-slate-400 font-sans font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          <span>acm_core.py</span>
        </div>
        <div><span className="text-blue-600 font-semibold">def</span> <span className="text-slate-900 font-semibold">build_future</span>():</div>
        <div className="pl-2 text-slate-500"><span className="text-blue-600">return</span> [<span className="text-emerald-600">"code"</span>, <span className="text-emerald-600">"impact"</span>]</div>
      </div>

      <div className="absolute bottom-1 left-0 sm:left-1 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-lg px-2.5 py-1 shadow-md text-slate-700 font-mono text-[10px] hidden sm:block">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-slate-400">&lt;status&gt;</span>
          <span className="text-blue-600 font-semibold">200 OK</span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-600 font-medium">Active</span>
        </div>
      </div>
    </div>
  );
};
