import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FadeIn, SlideUp, Stagger, StaggerItem } from "@/components/ui/motion";
import { MapPin, Phone, Mail, Clock, Calendar as CalendarIcon, Video, Stethoscope, CreditCard, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SHS — Book an Appointment in Belagavi" },
      {
        name: "description",
        content:
          "Book a consultation at Skin & Hair Solutions, Belagavi. Phone, email, WhatsApp, location and clinic hours.",
      },
      { property: "og:title", content: "Contact SHS — Belagavi" },
      { property: "og:description", content: "Book an appointment." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[+\d\s-]+$/),
  email: z.string().trim().email().max(160),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  type: z.enum(["in-clinic", "online"]),
  reason: z.string().trim().min(2).max(120),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      setStatus("err");
      return;
    }
    setStatus("ok");
    setError(null);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title={
          <>
            Begin your <em className="text-primary not-italic">consultation.</em>
          </>
        }
        lede="Share a few details and our team will confirm your appointment within working hours."
      />
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        {/* Decorative background glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <SlideUp className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-card/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 mix-blend-overlay" />
              
              <div className="relative z-10">
                <h2 className="mb-8 font-display text-3xl">Appointment Details</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full name" name="name" type="text" placeholder="Jane Doe" required />
                <Field label="Phone number" name="phone" type="tel" placeholder="+91 90000 00000" required />
                
                <div className="md:col-span-2">
                  <Field label="Email address" name="email" type="email" placeholder="jane@example.com" required />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Consultation Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-foreground/15 bg-background p-4 text-center transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input type="radio" name="type" value="in-clinic" className="peer sr-only" defaultChecked />
                      <Stethoscope className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium">In-Clinic</span>
                    </label>
                    <label className="relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-foreground/15 bg-background p-4 text-center transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input type="radio" name="type" value="online" className="peer sr-only" />
                      <Video className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium">Online (Video)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <Field label="Preferred Date" name="date" type="date" required />
                  <div className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Preferred Time</span>
                    <div className="relative mt-2">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <select name="time" required className="w-full appearance-none rounded-xl border border-foreground/15 bg-background py-3 pl-10 pr-4 text-sm outline-none focus:border-primary">
                        <option value="" disabled selected>Select a slot</option>
                        <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="evening">Evening (4:00 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Reason for Visit
                    </span>
                    <textarea
                      name="reason"
                      rows={3}
                      placeholder="Please briefly describe your skin or hair concerns..."
                      required
                      className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-xl bg-primary/5 p-4 text-sm text-primary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <p>
                  <strong>Our team will contact you to confirm your appointment.</strong> Please note that submitting this form requests a slot, but the exact time is subject to clinic availability.
                </p>
              </div>

              <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-foreground/10 pt-8 md:flex-row">
                <a href="https://wa.me/919000000000" className="btn-outline w-full justify-center gap-2 md:w-auto">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Instead
                </a>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Book Appointment
                </button>
              </div>

              {status === "ok" && (
                <FadeIn className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                  <p className="font-medium">Request Received!</p>
                  <p className="text-sm">Thank you. Our front desk will call you shortly to confirm your booking.</p>
                </FadeIn>
              )}
              {status === "err" && <FadeIn><p className="mt-6 text-sm font-medium text-destructive">{error}</p></FadeIn>}
              </div>
            </form>
          </SlideUp>
          <aside className="lg:col-span-5">
            <Stagger className="grid gap-6">
              {/* Working Hours Card */}
              <StaggerItem>
                <div className="rounded-3xl bg-secondary p-8 ring-1 ring-foreground/5 transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="flex items-center gap-2 font-display text-xl text-primary">
                    <Clock className="h-5 w-5" /> Working Hours
                  </h3>
                  <ul className="mt-6 divide-y divide-foreground/10 text-sm">
                    <li className="flex justify-between py-3">
                      <span className="text-muted-foreground">Monday – Saturday</span>
                      <span className="font-medium">10:00 AM – 7:30 PM</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-destructive">Closed</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Consultation Fee Card */}
              <StaggerItem>
                <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="flex items-center gap-2 font-display text-xl text-primary">
                    <CreditCard className="h-5 w-5" /> Consultation Fee
                  </h3>
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">Standard in-clinic doctor consultation</p>
                    <p className="mt-2 font-display text-3xl">₹500</p>
                    <p className="mt-3 text-xs text-muted-foreground">*Follow-ups within 7 days are complimentary. Procedure costs vary based on treatment plan.</p>
                  </div>
                </div>
              </StaggerItem>

              {/* Clinic Info */}
              <StaggerItem>
                <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-foreground/5 transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="font-display text-xl">Location</h3>
                  <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 
                      <span>Tilakwadi, Belagavi, Karnataka 590006</span>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 
                      <span>+91 90000 00000</span>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 
                      <span>care@skinandhairsolutions.in</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>
            </Stagger>
          </aside>
        </div>
      </section>
      <section className="bg-background pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-card p-2 sm:p-4 shadow-xl">
            <div className="relative overflow-hidden rounded-[2rem]">
              <iframe
                title="SHS Belagavi"
                src="https://www.google.com/maps?q=Tilakwadi%20Belagavi&output=embed"
                className="h-[400px] md:h-[600px] w-full border-0 grayscale-[0.2]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
