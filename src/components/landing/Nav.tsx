import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { PlaneSide } from "./svg";

/**
 * Fixed scroll-linked airplane that flies along a curved path
 * on the right edge of the viewport as the user scrolls.
 */
export function FlightScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.4 });

  // Airplane moves top -> bottom on the side, with x oscillation for curve
  const y = useTransform(smooth, [0, 1], ["10vh", "85vh"]);
  const x = useTransform(smooth, [0, 0.25, 0.5, 0.75, 1], ["0px", "-40px", "20px", "-30px", "10px"]);
  const rotate = useTransform(smooth, [0, 0.25, 0.5, 0.75, 1], [-10, 10, -8, 12, -6]);
  const opacity = useTransform(smooth, [0, 0.03, 0.95, 1], [0, 1, 1, 0.3]);

  const pathLength = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <>
      {/* Flight path — decorative curve running along right side */}
      <svg
        className="pointer-events-none fixed inset-y-0 right-4 z-30 hidden h-full w-24 md:block"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="fpath" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.82 0.14 225)" stopOpacity="0.8" />
            <stop offset="1" stopColor="oklch(0.82 0.14 225)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M50 20 Q10 200 60 400 Q100 600 30 800 Q10 900 50 980"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <motion.path
          d="M50 20 Q10 200 60 400 Q100 600 30 800 Q10 900 50 980"
          stroke="url(#fpath)"
          strokeWidth="1.5"
          style={{ pathLength }}
        />
      </svg>

      <motion.div
        className="pointer-events-none fixed right-8 top-0 z-40 hidden h-14 w-24 md:block"
        style={{ y, x, rotate, opacity }}
      >
        <PlaneSide className="h-full w-full drop-shadow-[0_6px_16px_rgba(120,200,255,0.5)]" />
      </motion.div>
    </>
  );
}

export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#journey", label: "Journey" },
    { href: "#courses", label: "Courses" },
    { href: "#mentors", label: "Mentors" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass-strong flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-bright to-sky">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-navy-deep" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            FlightSphere<span className="text-sky-bright">.</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-xs font-medium text-white/70 md:flex">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="transition hover:text-white">{l.label}</a></li>
          ))}
        </ul>
        <button onClick={() => import("./EnrollDialog").then(m => m.openEnrollDialog())} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy-deep transition hover:bg-sky-glow">
          Enroll Now
        </button>
      </nav>
    </motion.header>
  );
}
