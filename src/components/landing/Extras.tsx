import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Plane, Star } from "lucide-react";
import cockpit from "@/assets/gallery-cockpit.jpg";
import simulator from "@/assets/gallery-simulator.jpg";
import aircraft from "@/assets/gallery-aircraft.jpg";
import cabincrew from "@/assets/gallery-cabincrew.jpg";
import airport from "@/assets/gallery-airport.jpg";
import pilot from "@/assets/gallery-pilot.jpg";
import sunset from "@/assets/sunset-cta.jpg";

/* -------- LEARNING EXPERIENCE (boarding passes) -------- */
const learning = [
  { code: "MI-01", title: "Mock Interviews", gate: "A12" },
  { code: "WS-02", title: "Aviation Workshops", gate: "B04" },
  { code: "SC-03", title: "Smart Classrooms", gate: "C07" },
  { code: "PD-04", title: "Personality Development", gate: "A21" },
  { code: "SS-05", title: "Soft Skill Training", gate: "D09" },
  { code: "CC-06", title: "Career Counselling", gate: "B16" },
  { code: "AS-07", title: "Aviation Seminars", gate: "C11" },
  { code: "PA-08", title: "Practice Assessments", gate: "A03" },
];

export function Learning() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-glow">
            <span className="h-1 w-1 rounded-full bg-sky-bright" />Learning Experience
          </div>
          <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            Board every session like a <span className="text-gradient-sky">first-class flight</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {learning.map((l, i) => (
            <motion.div
              key={l.code}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1"
            >
              {/* boarding pass notch */}
              <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-navy-deep" />
              <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-navy-deep" />
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-sky-glow/70">
                <span>Boarding Pass</span>
                <span>{l.code}</span>
              </div>
              <div className="my-5 border-t border-dashed border-white/15" />
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Session</div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">{l.title}</h3>
                </div>
                <Plane className="h-5 w-5 -rotate-45 text-sky-bright" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
                <div><div className="text-white/40">Gate</div><div className="text-white">{l.gate}</div></div>
                <div><div className="text-white/40">Seat</div><div className="text-white">1A</div></div>
                <div><div className="text-white/40">Class</div><div className="text-sky-glow">Elite</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- TESTIMONIALS -------- */
const stories = [
  { name: "Aditya Verma", role: "Now First Officer · IndiGo", quote: "FlightSphere turned my DGCA prep into a real cockpit seat. The mentors pushed me until the sky felt inevitable.", rating: 5 },
  { name: "Sara Khanna", role: "Cabin Crew · Emirates", quote: "From nervous applicant to Dubai-based cabin crew in 11 months. The grooming and interview training changed everything.", rating: 5 },
  { name: "Kabir Malhotra", role: "Ground Ops · Delhi T3", quote: "The airport operations track is unreal — practical, current, and built by people actually working the ramp.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-glow">
            <span className="h-1 w-1 rounded-full bg-sky-bright" />Success Stories
          </div>
          <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            From dreaming of flying <br/><span className="text-gradient-sky">to living it.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass flex flex-col rounded-3xl p-7"
            >
              <div className="flex gap-1 text-sky-bright">
                {Array.from({ length: s.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-white/85">"{s.quote}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-bright to-sky font-display text-sm font-semibold text-navy-deep">
                  {s.name.split(" ").map(w => w[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-white">{s.name}</div>
                  <div className="text-xs text-sky-glow/80">{s.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- GLOBAL STANDARDS w/ animated world map arcs -------- */
export function GlobalStandards() {
  const standards = [
    "Aviation Etiquette", "Interview Preparation", "Professional Communication",
    "Industry Readiness", "Career Planning", "International Exposure",
  ];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-glow">
              <span className="h-1 w-1 rounded-full bg-sky-bright" />Global Standards
            </div>
            <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              Inspired by <span className="text-gradient-sky">global aviation standards</span>.
            </h2>
            <p className="mt-5 max-w-xl text-white/60">
              Our training methodology is designed around international aviation practices,
              airline expectations and the professional standards of the world's leading carriers.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {standards.map((s) => (
                <li key={s} className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-bright" />{s}
                </li>
              ))}
            </ul>
          </div>

          <WorldMapArcs />
        </div>
      </div>
    </section>
  );
}

function WorldMapArcs() {
  // Simple dotted "globe" with animated flight arcs
  const routes = [
    { d: "M40,220 Q200,60 380,180", delay: 0 },
    { d: "M80,260 Q220,120 420,240", delay: 1 },
    { d: "M60,180 Q260,20 440,160", delay: 2 },
  ];
  return (
    <div className="glass relative aspect-square w-full max-w-xl overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,oklch(0.72_0.14_235/0.6),transparent_60%)]" />
      <svg viewBox="0 0 480 480" className="relative h-full w-full">
        <defs>
          <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="oklch(0.82 0.14 225)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.82 0.14 225)" stopOpacity="1" />
            <stop offset="1" stopColor="oklch(0.82 0.14 225)" stopOpacity="0" />
          </linearGradient>
          <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.15)" />
          </pattern>
        </defs>
        {/* stylized continents as dotted blobs */}
        <g fill="url(#dots)">
          <path d="M60,140 C80,100 160,90 200,120 C240,150 220,210 180,220 C120,240 60,220 60,140 Z" />
          <path d="M240,90 C280,70 340,80 370,120 C400,160 370,200 320,200 C260,200 220,150 240,90 Z" />
          <path d="M120,270 C160,260 220,280 240,320 C260,370 200,410 150,390 C110,375 90,320 120,270 Z" />
          <path d="M300,250 C360,240 420,270 430,320 C440,380 380,400 330,380 C280,360 270,290 300,250 Z" />
        </g>
        {/* dots for cities */}
        {[[80,180],[210,150],[350,170],[180,340],[360,320]].map(([x,y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="oklch(0.82 0.14 225)" />
            <circle cx={x} cy={y} r="6" fill="oklch(0.82 0.14 225)" opacity="0.25">
              <animate attributeName="r" values="4;14;4" dur="2.4s" begin={`${i*0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" begin={`${i*0.4}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {routes.map((r, i) => (
          <g key={i}>
            <path d={r.d} stroke="rgba(255,255,255,0.1)" strokeDasharray="3 5" fill="none" />
            <path d={r.d} stroke="url(#arc)" strokeWidth="1.5" fill="none" strokeDasharray="80 300" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" from="380" to="0" dur="3.5s" begin={`${r.delay}s`} repeatCount="indefinite" />
            </path>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* -------- GALLERY -------- */
const gallery = [
  { src: cockpit, title: "Aircraft Cockpit" },
  { src: simulator, title: "Flight Simulator" },
  { src: aircraft, title: "Commercial Aircraft" },
  { src: cabincrew, title: "Cabin Crew Training" },
  { src: airport, title: "Airport Operations" },
  { src: pilot, title: "Pilot Training" },
];

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    if (img.complete && img.naturalHeight !== 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy-mid">
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
          loaded ? "scale-100 blur-0" : "scale-105 blur-lg"
        }`}
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-glow">
              <span className="h-1 w-1 rounded-full bg-sky-bright" />Gallery
            </div>
            <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              Moments from the <span className="text-gradient-sky">flight deck</span>.
            </h2>
          </div>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10"
            >
              <LazyImage src={g.src} alt={g.title} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-sky-glow">0{i + 1}</div>
                  <div className="mt-1 font-display text-lg font-semibold text-white">{g.title}</div>
                </div>
                <div className="glass rounded-full p-2 opacity-0 transition group-hover:opacity-100">
                  <Plane className="h-4 w-4 text-sky-bright" />
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- FAQ -------- */
const faqs = [
  { q: "Who can join FlightSphere Academy?", a: "Any student or professional passionate about aviation — from 10+2 students to graduates and career switchers." },
  { q: "How do I become a Pilot?", a: "We guide you through Class 2 medicals, DGCA prep, ground school, flying hours and CPL — end to end." },
  { q: "What is DGCA?", a: "The Directorate General of Civil Aviation regulates Indian civil aviation. Pilots must clear DGCA exams for licensing." },
  { q: "What careers are available in Aviation?", a: "Pilot, Cabin Crew, Ground Staff, Airport Operations, Aerospace Engineering, MRO, Air Traffic Control and more." },
  { q: "Do you provide placement assistance?", a: "Yes — dedicated placement drives, airline tie-ups and interview prep with a 96% placement rate." },
  { q: "Do I need a science background?", a: "Only for pilot and aerospace tracks. Cabin crew, ground staff and hospitality tracks accept any stream." },
  { q: "What courses are available?", a: "Pilot Prep, Cabin Crew, Ground Staff, Aerospace Programs and Career Counselling — see the Courses section." },
  { q: "How do I apply?", a: "Book a free career counselling session — we'll assess your goals and design a personalised roadmap." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-glow">
            <span className="h-1 w-1 rounded-full bg-sky-bright" />FAQ
          </div>
          <h2 className="text-4xl font-semibold md:text-5xl">Pre-flight questions.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-white md:text-lg">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-sky-bright transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-white/65">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------- FINAL CTA -------- */
export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img src={sunset} alt="" width={1920} height={1080} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/40 to-navy-deep" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-5xl font-semibold tracking-tight text-white md:text-7xl"
        >
          Ready for <span className="text-gradient-sky">takeoff</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          Turn your passion for aviation into a successful international career.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button onClick={() => import("./EnrollDialog").then(m => m.openEnrollDialog())} className="glass rounded-full px-8 py-4 text-sm font-semibold text-white">
            Schedule Free Counselling
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* -------- FOOTER -------- */
export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-deep py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-bright to-sky">
              <Plane className="h-4 w-4 -rotate-45 text-navy-deep" />
            </span>
            <span className="font-display text-lg font-semibold">FlightSphere<span className="text-sky-bright">.</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/60">
            Elevating dreams beyond the horizon. Premium aviation, aerospace and airline coaching for the next generation of professionals.
          </p>
        </div>
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-sky-glow">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/70">
            {["Home","About","Courses","Mentors","Gallery","FAQs","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="transition hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-sky-glow">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>+91 98765 43210</li>
            <li>hello@flightsphere.academy</li>
            <li>Terminal 3 Business Park,<br/>New Delhi, India</li>
            <li className="flex gap-3 pt-2">
              {["IN","IG","YT","X"].map(s => (
                <a key={s} href="#" className="glass flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold">{s}</a>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/40 lg:px-10">
        © {new Date().getFullYear()} FlightSphere Academy · Elevating Dreams Beyond the Horizon.
      </div>
    </footer>
  );
}
