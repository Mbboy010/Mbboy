"use client";

export default function GradientWaves() {
  return (
    <div className="relative w-full flex flex-col justify-end opacity-50 md:h-[30%] h-[90%]">
      <svg
        className="w-full h-40"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient 1 */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5b329c" />
            <stop offset="100%" stopColor="#74166a" />
          </linearGradient>
          {/* Gradient 2 */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3c1d2d" />
            <stop offset="100%" stopColor="#660d94" />
          </linearGradient>
          {/* Gradient 3 */}
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8c3161" />
            <stop offset="100%" stopColor="#ff309c" />
          </linearGradient>
        </defs>

        {/* wave 1 */}
        <path
          d="M1200 200 
             C 1000 120, 700 80, 400 100 
             S 0 40, 0 40"
          stroke="url(#grad1)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* wave 2 */}
        <path
          d="M1200 200 
             C 1000 140, 700 120, 400 140 
             S 0 100, 0 100"
          stroke="url(#grad2)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* wave 3 */}
        <path
          d="M1200 200 
             C 1000 160, 700 160, 400 180 
             S 0 160, 0 160"
          stroke="url(#grad3)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}