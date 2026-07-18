import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Nav, FlightScrollIndicator } from "@/components/landing/Nav";
import { About, Journey, Courses, Industry, Mentors } from "@/components/landing/Sections";
import { Learning, Testimonials, GlobalStandards, Gallery, FAQ, FinalCTA, Footer } from "@/components/landing/Extras";
import { EnrollDialog } from "@/components/landing/EnrollDialog";

const FAQ_ITEMS = [
  { q: "Who can join FlightSphere Academy?", a: "Any student or professional passionate about aviation — from 10+2 students to graduates and career switchers." },
  { q: "How do I become a Pilot?", a: "We guide you through Class 2 medicals, DGCA prep, ground school, flying hours and CPL — end to end." },
  { q: "What is DGCA?", a: "The Directorate General of Civil Aviation regulates Indian civil aviation. Pilots must clear DGCA exams for licensing." },
  { q: "What careers are available in Aviation?", a: "Pilot, Cabin Crew, Ground Staff, Airport Operations, Aerospace Engineering, MRO, Air Traffic Control and more." },
  { q: "Do you provide placement assistance?", a: "Yes — dedicated placement drives, airline tie-ups and interview prep with a 96% placement rate." },
  { q: "Do I need a science background?", a: "Only for pilot and aerospace tracks. Cabin crew, ground staff and hospitality tracks accept any stream." },
  { q: "What courses are available?", a: "Pilot Prep, Cabin Crew, Ground Staff, Aerospace Programs and Career Counselling — see the Courses section." },
  { q: "How do I apply?", a: "Book a free career counselling session — we'll assess your goals and design a personalised roadmap." },
];

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "FlightSphere Academy — Aviation & Aerospace Coaching Institute" },
      { name: "description", content: "World-class coaching for pilots, cabin crew, ground staff and aerospace careers. DGCA prep, simulator training, placement support. Your journey to the skies begins here." },
      { property: "og:title", content: "FlightSphere Academy — The Future of Aviation Starts Here" },
      { property: "og:description", content: "Premium aviation coaching, mentorship and career launchpad for future pilots, cabin crew and aerospace professionals." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map(f => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "LocalBusiness",
              name: "FlightSphere Academy",
              image: "/",
              telephone: "+91-98765-43210",
              email: "hello@flightsphere.academy",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Terminal 3 Business Park",
                addressLocality: "New Delhi",
                addressCountry: "IN",
              },
              url: "/",
            },
          ],
        }),
      },
    ],
  }),
});

function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <FlightScrollIndicator />
      <Hero />
      <About />
      <Journey />
      <Courses />
      <Industry />
      <Mentors />
      <Learning />
      <Testimonials />
      <GlobalStandards />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <Footer />
      <EnrollDialog />
    </main>
  );
}
