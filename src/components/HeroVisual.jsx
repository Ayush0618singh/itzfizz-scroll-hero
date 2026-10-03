function HeroVisual({ visualRef }) {
  return (
    <div
      ref={visualRef}
      className="hero-visual"
      data-scroll-visual
      aria-hidden="true"
    >
      <div className="visual-glow" />

      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />

      <div className="visual-chip visual-chip-left">
        <span>01</span>
        <p>SCROLL MOTION</p>
      </div>

      <div className="visual-chip visual-chip-right">
        <span>60</span>
        <p>FPS TARGET</p>
      </div>

      <svg
        className="concept-car"
        viewBox="0 0 900 420"
        role="presentation"
      >
        <defs>
          <linearGradient
            id="carBody"
            x1="130"
            y1="100"
            x2="790"
            y2="350"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="30%" stopColor="#9ca3af" />
            <stop offset="56%" stopColor="#f9fafb" />
            <stop offset="78%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          <linearGradient
            id="carGlass"
            x1="355"
            y1="120"
            x2="650"
            y2="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#15191f" />
            <stop offset="55%" stopColor="#29313a" />
            <stop offset="100%" stopColor="#090b0e" />
          </linearGradient>

          <radialGradient id="wheelMetal">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="26%" stopColor="#3f4650" />
            <stop offset="58%" stopColor="#111318" />
            <stop offset="100%" stopColor="#030405" />
          </radialGradient>

          <linearGradient
            id="accentLine"
            x1="100"
            y1="0"
            x2="800"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ff6238" stopOpacity="0" />
            <stop offset="45%" stopColor="#ff6238" />
            <stop offset="100%" stopColor="#ffb35c" stopOpacity="0" />
          </linearGradient>

          <filter
            id="softShadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <ellipse
          cx="460"
          cy="356"
          rx="340"
          ry="31"
          fill="#000000"
          opacity="0.58"
          filter="url(#softShadow)"
        />

        <path
          d="
            M78 279
            C109 251 149 231 205 219
            L322 196
            L390 139
            C418 115 452 103 491 103
            L575 103
            C620 103 655 118 686 145
            L752 203
            C798 214 824 235 841 268
            L854 292
            C863 309 851 327 832 327
            L751 327
            C741 373 700 405 650 405
            C600 405 559 373 549 327
            L337 327
            C327 373 286 405 236 405
            C186 405 145 373 135 327
            L98 327
            C80 327 66 313 68 296
            C69 289 72 284 78 279
            Z
          "
          fill="url(#carBody)"
        />

        <path
          d="
            M336 194
            L401 143
            C422 125 451 116 484 116
            L565 116
            C599 116 626 127 651 148
            L705 197
            Z
          "
          fill="url(#carGlass)"
        />

        <path
          d="M487 116 L476 195"
          stroke="#89919b"
          strokeWidth="4"
          opacity="0.55"
        />

        <path
          d="M329 213 C444 199 596 198 746 214"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="3"
          fill="none"
        />

        <path
          d="M168 265 C337 248 552 247 779 264"
          stroke="url(#accentLine)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M757 224 C800 232 822 245 836 267"
          stroke="#ffb067"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.95"
        />

        <path
          d="M95 275 C120 257 149 247 180 243"
          stroke="#f7f7f7"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.85"
        />

        <g className="car-wheel" data-car-wheel>
          <circle cx="236" cy="328" r="62" fill="#050608" />

          <circle
            cx="236"
            cy="328"
            r="42"
            fill="url(#wheelMetal)"
            stroke="#454b54"
            strokeWidth="3"
          />

          <path
            d="M236 292 V364 M200 328 H272 M211 303 L261 353 M261 303 L211 353"
            stroke="#9ca3af"
            strokeWidth="4"
            opacity="0.55"
          />

          <circle cx="236" cy="328" r="14" fill="#d6dae0" />
        </g>

        <g className="car-wheel" data-car-wheel>
          <circle cx="650" cy="328" r="62" fill="#050608" />

          <circle
            cx="650"
            cy="328"
            r="42"
            fill="url(#wheelMetal)"
            stroke="#454b54"
            strokeWidth="3"
          />

          <path
            d="M650 292 V364 M614 328 H686 M625 303 L675 353 M675 303 L625 353"
            stroke="#9ca3af"
            strokeWidth="4"
            opacity="0.55"
          />

          <circle cx="650" cy="328" r="14" fill="#d6dae0" />
        </g>

        <path
          d="M385 290 H546"
          stroke="#20252b"
          strokeWidth="3"
          opacity="0.65"
        />

        <rect
          x="766"
          y="283"
          width="58"
          height="5"
          rx="2.5"
          fill="#ff693d"
        />
      </svg>

      <div className="visual-floor-line" />

      <div className="visual-index">
        <span>ITZFIZZ</span>
        <span>© 2026</span>
      </div>
    </div>
  );
}

export default HeroVisual;