import { motion, useReducedMotion } from "motion/react";
import type { SVGProps } from "react";

export function PlaneSide(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#a8d4ff" />
        </linearGradient>
      </defs>
      {/* Fuselage */}
      <path d="M6 30 C 30 22, 100 20, 160 24 L 190 30 L 160 36 C 100 40, 30 38, 6 30 Z" fill="url(#pgrad)" stroke="rgba(10,20,40,0.4)" strokeWidth="0.5"/>
      {/* Tail */}
      <path d="M155 26 L 172 8 L 178 8 L 172 26 Z" fill="url(#pgrad)" />
      {/* Main wing */}
      <path d="M80 30 L 120 12 L 138 12 L 108 32 Z" fill="url(#pgrad)" opacity="0.95" />
      <path d="M80 30 L 120 48 L 138 48 L 108 30 Z" fill="url(#pgrad)" opacity="0.85" />
      {/* Windows */}
      <g fill="rgba(10,25,50,0.55)">
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={30 + i * 8} y="28" width="4" height="2.2" rx="0.6" />
        ))}
      </g>
      {/* Cockpit */}
      <path d="M14 30 C 22 26, 28 26, 32 28 L 32 32 C 26 32, 20 32, 14 30 Z" fill="rgba(10,25,50,0.7)" />
      {/* Engine */}
      <ellipse cx="102" cy="38" rx="10" ry="4" fill="rgba(10,25,50,0.55)" />
    </svg>
  );
}

export function Cloud({ className, delay = 0, scale = 1 }: { className?: string; delay?: number; scale?: number }) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={className}
      style={{ transform: `scale(${scale})`, animationDelay: `${delay}s` }}
    >
      <defs>
        <radialGradient id={`cg${delay}`} cx="50%" cy="50%">
          <stop offset="0" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="45" rx="45" ry="22" fill={`url(#cg${delay})`} />
      <ellipse cx="110" cy="38" rx="55" ry="26" fill={`url(#cg${delay})`} />
      <ellipse cx="150" cy="48" rx="38" ry="20" fill={`url(#cg${delay})`} />
    </svg>
  );
}

export function ParticleField({ count = 40 }: { count?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 2 + 0.5;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-sky-glow/70"
            style={{
              width: size, height: size,
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              boxShadow: "0 0 6px currentColor",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
          />
        );
      })}
    </div>
  );
}
