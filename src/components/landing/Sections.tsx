import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import {
  Globe2, GraduationCap, Users, Compass, Sparkles, Award, User, MessageSquare,
  Plane, Headphones, Building2, Rocket, LineChart,
} from "lucide-react";

/* -------- SECTION HEADER -------- */
function SectionHead({ eyebrow, title, sub, align = "left" }: { eyebrow: string; title: React.ReactNode; sub?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-glow">
        <span className="h-1 w-1 rounded-full bg-sky-bright" />{eyebrow}
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-white/60 md:text-lg">{sub}</p>}
    </div>
  );
}

/* -------- ABOUT -------- */
const aboutCards = [
  { icon: Globe2, title: "International Standard Coaching", text: "Curriculum modelled on global aviation training benchmarks." },
  { icon: GraduationCap, title: "Industry Experts", text: "Learn from captains, cabin managers and aerospace engineers." },
  { icon: Compass, title: "Career Guidance", text: "Structured roadmaps from first flight to airline cockpit." },
  { icon: Users, title: "Aviation Mentorship", text: "One-on-one mentors who have walked the runway before you." },
  { icon: Sparkles, title: "Modern Learning Methods", text: "Immersive simulators, live case studies and smart classrooms." },
  { icon: Award, title: "Placement Assistance", text: "Airline partnerships and interview pipelines built for you." },
  { icon: User, title: "Personalised Learning", text: "Adaptive plans tuned to your ability, pace and career goal." },
  { icon: MessageSquare, title: "Interview Preparation", text: "Mock panels replicating DGCA and airline hiring rounds." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.72_0.14_235/0.15),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Why FlightSphere"
          title={<>We don't just teach aviation. <br/><span className="text-gradient-sky">We prepare future aviation professionals.</span></>}
          sub="Every element of the academy is engineered around a single outcome: your career in the skies."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-bright/40"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,oklch(0.82_0.14_225/0.2),transparent_60%)]" />
              <c.icon className="h-6 w-6 text-sky-bright" />
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/60">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- JOURNEY TIMELINE -------- */
const steps = [
  { t: "Discover Your Aviation Career", d: "Personality mapping, aptitude tests and career discovery sessions." },
  { t: "Choose Your Training Program", d: "Pilot, cabin crew, ground staff or aerospace — pick your runway." },
  { t: "Learn from Industry Experts", d: "Live classes and workshops with airline professionals." },
  { t: "Master Aviation Concepts", d: "Aerodynamics, navigation, meteorology and airline operations." },
  { t: "Interview Preparation", d: "Grooming, group discussions and airline interview simulations." },
  { t: "Launch Your Career", d: "Placement drives with domestic and international carriers." },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Flight Plan"
          title={<>Your Aviation <span className="text-gradient-sky">Journey</span></>}
          sub="Six checkpoints. One destination — a career above the clouds."
          align="center"
        />
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* central path */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-bright/40 to-transparent" />
          <div className="space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                {/* checkpoint dot */}
                <div className="pointer-events-none absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                  <div className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full bg-sky-bright/30 animate-radar" />
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-bright ring-4 ring-navy-deep" />
                  </div>
                </div>
                <div className={`glass rounded-2xl p-6 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-sky-glow/80">Checkpoint 0{i + 1}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- COURSES -------- */
const courses = [
  { icon: Plane, title: "Pilot Entrance Preparation", tag: "Cockpit Track",
    items: ["DGCA Preparation", "Commercial Pilot Guidance", "Aviation Fundamentals"] },
  { icon: Sparkles, title: "Cabin Crew Training", tag: "In-Flight",
    items: ["Grooming Sessions", "Communication Skills", "Personality Development", "Airline Interviews"] },
  { icon: Headphones, title: "Ground Staff Training", tag: "On-Ground",
    items: ["Airport Operations", "Customer Service", "Aviation Management"] },
  { icon: Rocket, title: "Aerospace Programs", tag: "Beyond the Sky",
    items: ["Aerodynamics", "Aircraft Fundamentals", "Industry Knowledge"] },
  { icon: Compass, title: "Career Counselling Programs", tag: "Guidance",
    items: ["Scholarship Guidance", "Career Roadmaps", "One-on-One Sessions"] },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,oklch(0.72_0.14_235/0.18),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Programs"
          title={<>Choose your <span className="text-gradient-sky">runway</span>.</>}
          sub="Five specialised tracks — each designed to lift a different kind of aviation dream."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl p-7 transition hover:-translate-y-2 hover:border-sky-bright/50 hover:shadow-[0_0_60px_-15px_oklch(0.82_0.14_225/0.5)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-bright/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-glow/70">{c.tag}</span>
                <c.icon className="h-6 w-6 text-sky-bright transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">{c.title}</h3>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {c.items.map(it => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-sky-bright to-transparent" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-sky-glow transition group-hover:gap-3">
                Explore program
                <span>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- INDUSTRY / STATS -------- */
function Counter({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  useEffect(() => {
    if (inView) animate(mv, to, { duration, ease: "easeOut" });
  }, [inView, to, duration, mv]);
  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
}

const stats = [
  { v: 12000, s: "+", l: "Students Trained" },
  { v: 96, s: "%", l: "Placement Success Rate" },
  { v: 28, s: "+", l: "Aviation Programs" },
  { v: 1500, s: "+", l: "Career Sessions Conducted" },
];

export function Industry() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead
              eyebrow="Industry Outlook"
              title={<>The aviation industry is <span className="text-gradient-sky">taking off</span>.</>}
              sub="Global fleets are expanding, borders are opening, and the world needs a new generation of skilled aviation professionals."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: Globe2, t: "International Careers" },
                { icon: LineChart, t: "High Growth Sector" },
                { icon: Building2, t: "Millions of Jobs" },
                { icon: Award, t: "Competitive Salaries" },
              ].map((x) => (
                <div key={x.t} className="glass flex items-center gap-3 rounded-xl p-4">
                  <x.icon className="h-5 w-5 text-sky-bright" />
                  <span className="text-sm font-medium">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-bright/60 to-transparent" />
                <div className="font-display text-4xl font-semibold text-white md:text-5xl">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/50">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- MENTORS -------- */
const mentors = [
  { name: "Capt. Aarav Mehra", role: "Commercial Pilot · A320", exp: "18+ yrs", cert: "DGCA CPL, TR A320", spec: "Airline Ops & Flight Training" },
  { name: "Nyra Kapoor", role: "Cabin Services Manager", exp: "14 yrs · Gulf Carriers", cert: "IATA Certified", spec: "Cabin Crew & Grooming" },
  { name: "Dr. Ishaan Rao", role: "Aerospace Engineer", exp: "12 yrs · ISRO & Airbus", cert: "PhD Aerodynamics", spec: "Aerospace & Systems" },
  { name: "Meera Sethi", role: "Airport Operations Head", exp: "16 yrs", cert: "IATA Ground Ops", spec: "Ground Handling & Safety" },
];

export function Mentors() {
  return (
    <section id="mentors" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Mentors"
          title={<>Learn from <span className="text-gradient-sky">Aviation Experts</span>.</>}
          sub="Captains, cabin managers and aerospace engineers who have flown, served and built the industry."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 text-center transition hover:-translate-y-2"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-bright/25 to-transparent" />
              <div className="relative mx-auto mt-2 h-24 w-24 rounded-full bg-gradient-to-br from-sky-bright to-navy p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-navy-deep font-display text-2xl font-semibold text-white">
                  {m.name.split(" ").slice(-1)[0][0]}
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{m.name}</h3>
              <div className="mt-1 text-xs uppercase tracking-widest text-sky-glow/80">{m.role}</div>
              <dl className="mt-5 space-y-2 text-left text-xs text-white/60">
                <div className="flex justify-between border-t border-white/5 pt-2"><dt>Experience</dt><dd className="text-white/90">{m.exp}</dd></div>
                <div className="flex justify-between border-t border-white/5 pt-2"><dt>Certification</dt><dd className="text-white/90">{m.cert}</dd></div>
                <div className="flex justify-between border-t border-white/5 pt-2"><dt>Specialisation</dt><dd className="text-white/90">{m.spec}</dd></div>
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
