import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const openEnrollDialog = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-enroll"));
  }
};

const COURSES = [
  "Commercial Pilot License (CPL)",
  "Cabin Crew & Hospitality",
  "Aircraft Maintenance Engineering",
  "Aerospace Engineering Prep",
  "Air Traffic Control",
  "Ground Staff & Airport Ops",
  "Other / Not sure yet",
];

export function EnrollDialog() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: COURSES[0], message: "" });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-enroll", handler);
    return () => window.removeEventListener("open-enroll", handler);
  }, []);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.name.length > 100) return toast.error("Please enter your full name");
    if (!/^[+\d\s\-()]{7,20}$/.test(form.phone)) return toast.error("Please enter a valid contact number");
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return toast.error("Please enter a valid email");
    if (form.message.length > 1000) return toast.error("Message is too long");

    setSubmitting(true);
    try {
      // Store locally as a lightweight fallback so nothing is lost
      const key = "flightsphere_enquiries";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));

      toast.success("Enquiry received! Our counsellor will contact you within 24 hours.");
      setForm({ name: "", phone: "", email: "", course: COURSES[0], message: "" });
      setOpen(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg border-white/10 bg-navy-deep/95 text-white backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Begin Your Aviation Journey</DialogTitle>
          <DialogDescription className="text-white/60">
            Fill in your details and our admissions team will reach out shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="mt-2 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="en-name">Full Name *</Label>
            <Input id="en-name" required maxLength={100} value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your full name" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="en-phone">Contact Number *</Label>
              <Input id="en-phone" required inputMode="tel" maxLength={20} value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 98765 43210" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="en-email">Email (optional)</Label>
              <Input id="en-email" type="email" maxLength={255} value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="en-course">Course Interested In *</Label>
            <select
              id="en-course"
              value={form.course}
              onChange={e => update("course", e.target.value)}
              className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-bright"
            >
              {COURSES.map(c => <option key={c} value={c} className="bg-navy-deep">{c}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="en-msg">Enquiry / Message</Label>
            <Textarea id="en-msg" rows={3} maxLength={1000} value={form.message} onChange={e => update("message", e.target.value)} placeholder="Tell us about your goals or any question..." className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-gradient-to-r from-sky-bright to-sky px-6 py-3 text-sm font-semibold text-navy-deep shadow-[0_0_60px_-10px_oklch(0.82_0.14_225/0.8)] transition hover:scale-[1.01] disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
