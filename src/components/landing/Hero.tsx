import { motion } from "motion/react";
import { PlaneSide, Cloud, ParticleField } from "./svg";
import heroSky from "@/assets/hero-sky.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-hero">
      {/* Sky background image */}
      <div className="absolute inset-0">
        <img
          src={heroSky}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/40 to-navy-deep" />
      </div>

      {/* Drifting cloud layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[18%] left-0 w-[40vw] opacity-40 animate-drift-slow">
          <Cloud delay={0} scale={1} />
        </div>
        <div className="absolute top-[32%] left-0 w-[30vw] opacity-30 animate-drift-med">
          <Cloud delay={0.4} scale={0.8} />
        </div>
        <div className="absolute top-[55%] left-0 w-[50vw] opacity-25 animate-drift-slow" style={{ animationDelay: "-30s" }}>
          <Cloud delay={0.8} scale={1.2} />
        </div>
      </div>

      <ParticleField count={50} />

      {/* Content grid */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 pt-28 pb-40 lg:px-10">
        {/* Radar badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-sky-glow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-sky-bright animate-radar" />
            <span className="relative h-2 w-2 rounded-full bg-sky-bright" />
          </span>
          FlightSphere Academy · Cleared for takeoff
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
        >
          Your Journey to <br />
          the <span className="text-gradient-sky">Skies</span> Begins Here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl"
        >
          Prepare for a successful career in Aviation, Aerospace and Airline Industries
          with world-class coaching, mentorship, and an international training experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#courses"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-bright to-sky px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-[0_0_40px_-10px_oklch(0.82_0.14_225/0.8)] transition hover:scale-[1.02]"
          >
            Explore Courses
            <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Book Free Career Counselling
          </a>
        </motion.div>

        {/* Coordinates ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-white/50 md:max-w-md"
        >
          <div><div className="text-white/40">Runway</div><div className="text-sky-glow">27L · Ready</div></div>
          <div><div className="text-white/40">Heading</div><div className="text-sky-glow">090° NE</div></div>
          <div><div className="text-white/40">Altitude</div><div className="text-sky-glow">↑ FL350</div></div>
        </motion.div>
      </div>

      {/* Runway + Airplane */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64">
        {/* Ground */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent" />
        {/* Runway strip */}
        <div className="absolute inset-x-0 bottom-16 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-12 h-1 runway-lights opacity-0 animate-runway-glow" style={{ animation: "runway-glow 2s ease-in-out 0.4s infinite, fade-in 0.6s 0.2s forwards" }} />
        {/* Perspective runway */}
        <div className="absolute inset-x-0 bottom-0 h-40 [perspective:800px]">
          <div className="mx-auto h-full w-[80%] [transform:rotateX(70deg)] origin-bottom bg-[repeating-linear-gradient(0deg,transparent_0,transparent_40px,rgba(255,255,255,0.18)_40px,rgba(255,255,255,0.18)_46px)]" />
        </div>

        {/* Airplane taking off (looping) */}
        <div className="absolute bottom-20 left-0 w-full">
          <div className="relative h-24 w-full">
            <div className="absolute top-1/2 left-0 h-24 w-48 -translate-y-1/2 animate-takeoff">
              {/* trail */}
              <div className="absolute top-1/2 right-[70%] h-[2px] w-[60vw] -translate-y-1/2 bg-gradient-to-l from-white/80 via-sky-glow/50 to-transparent blur-[1px] animate-trail-sweep" />
              <PlaneSide className="relative h-full w-full -scale-x-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/50"
      >
        Scroll to board ↓
      </motion.div>
    </section>
  );
}
