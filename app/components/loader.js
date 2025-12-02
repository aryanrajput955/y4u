"use client";

export default function Loader() {
  return (
    <div className="loader" style={{ display: "flex", margin: "0.25em 0" }}>
      
      {/* Hidden SVG defs */}
      <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
        <defs>
          <linearGradient id="b" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#973BED" />
            <stop stopColor="#007CFF" offset="1" />
          </linearGradient>

          <linearGradient id="c" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC800" />
            <stop stopColor="#F0F" offset="1" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              dur="8s"
              repeatCount="indefinite"
              values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32"
            />
          </linearGradient>

          <linearGradient id="d" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E0ED" />
            <stop stopColor="#00DA72" offset="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Y */}
      <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path
          stroke="url(#b)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dash"
          pathLength="360"
          d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 Z"
        />
      </svg>

      {/* 4 */}
      <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path
          stroke="url(#c)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="spin"
          pathLength="360"
          d="M 40 4 L 12 42 H 40 V 60 M 40 4 V 42"
        />
      </svg>

      <div style={{ width: "0.5em" }} />

      {/* U */}
      <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path
          stroke="url(#d)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dash"
          pathLength="360"
          d="M 4,4 h 4.6 v 25.9 c 0,12 10 21.5 21.8 21.3 c 11.6,-0.24 21,-9.6 21.3,-21.25 v -26 h 4.6 v 25.9 c 0,14.3 -11.58,25.9 -25.9,25.9 c -14.27,0 -26.08,-11.6 -26.1,-26 Z"
        />
      </svg>
    </div>
  );
}
