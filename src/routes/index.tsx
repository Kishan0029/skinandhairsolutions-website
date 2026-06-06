import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Microscope,
  HeartHandshake,
  Award,
  Stethoscope,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Counter } from "@/components/site/Counter";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { FadeIn, SlideUp, Stagger, StaggerItem } from "@/components/ui/motion";
import heroSkin from "@/assets/hero-skin.png";
import hair from "@/assets/hair-care.png";
import clinic from "@/assets/clinic-interior.png";
import pharma from "@/assets/pharma-products.png";
import laser from "@/assets/laser-tech.png";
import baAcneBefore from "@/assets/ba-acne-before.png";
import baAcneAfter from "@/assets/ba-acne-after.png";
import baPigmentBefore from "@/assets/ba-pigment-before.png";
import baPigmentAfter from "@/assets/ba-pigment-after.png";
import baHairBefore from "@/assets/ba-hair-before.png";
import baHairAfter from "@/assets/ba-hair-after.png";
import homeSkinCare from "@/assets/home-skin-care.png";
import homeSkinRejuvenation from "@/assets/home-skin-rejuvenation.png";
import doctor from "@/assets/doctor.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skin & Hair Solutions — Premium Dermatology Clinic in Belagavi" },
      {
        name: "description",
        content:
          "Healthy skin. Stronger hair. Greater confidence. Advanced dermatology, trichology and aesthetic treatments by Belagavi's trusted specialists.",
      },
      {
        property: "og:title",
        content: "Skin & Hair Solutions — Belagavi's Premium Skin & Hair Clinic",
      },
      {
        property: "og:description",
        content: "Advanced treatments. Personalised care. Real results.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroSkin },
      { name: "twitter:image", content: heroSkin },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroSkin, fetchpriority: "high" } as never,
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    title: "Skin Care",
    desc: "Acne, pigmentation, melasma & medical dermatology.",
    to: "/skin-treatments",
    img: homeSkinCare,
  },
  {
    title: "Hair Care",
    desc: "Hair fall, PRP therapy, regrowth & trichology.",
    to: "/hair-treatments",
    img: hair,
  },
  {
    title: "Laser Treatments",
    desc: "FDA-cleared lasers for hair, skin & rejuvenation.",
    to: "/aesthetic-treatments",
    img: laser,
  },
  {
    title: "Aesthetic Procedures",
    desc: "Skin tightening, peels and contouring.",
    to: "/aesthetic-treatments",
    img: clinic,
  },
  {
    title: "Skin Rejuvenation",
    desc: "Hydrafacial, mesotherapy and glow protocols.",
    to: "/aesthetic-treatments",
    img: homeSkinRejuvenation,
  },
  {
    title: "Anti-Aging",
    desc: "Botox, fillers & advanced rejuvenation.",
    to: "/aesthetic-treatments",
    img: pharma,
  },
] as const;

const WHY = [
  {
    icon: Stethoscope,
    title: "Experienced Specialists",
    body: "Board-certified dermatologists and trichologists.",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    body: "Globally certified medical-grade technology.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Plans",
    body: "Treatment protocols tailored to your skin & goals.",
  },
  {
    icon: ShieldCheck,
    title: "Scientific Approach",
    body: "Evidence-based, ethical and result-driven care.",
  },
  { icon: Award, title: "Trusted Care", body: "Thousands of patients across North Karnataka." },
];

const JOURNEY = [
  { n: "01", t: "Book Appointment", d: "Reserve a consultation online or via WhatsApp." },
  { n: "02", t: "Diagnosis", d: "Detailed skin & scalp analysis with our specialists." },
  { n: "03", t: "Treatment Plan", d: "A personalised, transparent care plan." },
  { n: "04", t: "Results", d: "Visible, measurable, sustained outcomes." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-16 md:pt-40 md:pb-24">
        <div
          className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[var(--gold)]/20 blur-3xl float-slow"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <Stagger className="lg:col-span-7">
            <StaggerItem>
              <p className="eyebrow">Belagavi · Since years of trust</p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="reveal mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-[5.25rem] lg:leading-[1.02]">
                Healthy Skin.
                <br />
                Stronger Hair.
                <br />
                <span className="italic text-primary">Greater Confidence.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Advanced skin and hair treatments powered by dermatology expertise, modern technology
                and deeply personalised care.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Book Appointment <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/919000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Consultation
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" /> Certified
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--gold)]" /> Ethical
                </span>
                <span className="flex items-center gap-2">
                  <Award className="h-3.5 w-3.5 text-[var(--gold)]" /> Trusted
                </span>
              </div>
            </StaggerItem>
          </Stagger>

          <FadeIn delay={0.3} className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-beige">
              <img
                src={heroSkin}
                alt="Healthy glowing skin"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent p-6">
                <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium text-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Now accepting
                  appointments
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TRUST COUNTERS */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="gold-line mx-auto mb-14 w-24" />
          <Stagger className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {[
              { v: 10000, s: "+", l: "Patients Treated" },
              { v: 5000, s: "+", l: "Hair Solutions" },
              { v: 5000, s: "+", l: "Skin Procedures" },
              { v: 98, s: "%", l: "Patient Satisfaction" },
            ].map((s) => (
              <StaggerItem key={s.l} className="text-center">
                <p className="font-display text-4xl text-primary md:text-5xl lg:text-6xl">
                  <Counter value={s.v} suffix={s.s} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {s.l}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
            <div>
              <p className="eyebrow">Our Care</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-5xl">
                A complete spectrum of dermatology, trichology & aesthetic medicine.
              </h2>
            </div>
            <Link
              to="/skin-treatments"
              className="link-underline text-sm font-medium text-primary"
            >
              Explore all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
            {SERVICES.map((s, i) => (
              <SlideUp key={s.title} delay={i * 0.1}>
                <Link
                  to={s.to}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                    <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <ArrowUpRight className="mt-6 h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Stagger className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <StaggerItem>
                  <img
                    src={doctor}
                    alt="Dr. Santosh Shinde, Lead Dermatologist"
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </StaggerItem>
                <StaggerItem>
                  <div className="aspect-[4/5] w-full rounded-2xl bg-secondary p-8 flex flex-col justify-end">
                    <Award className="h-10 w-10 text-[var(--gold)] mb-6" />
                    <h3 className="font-display text-2xl text-primary">Clinical Excellence</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Board-certified specialists delivering evidence-based care.</p>
                  </div>
                </StaggerItem>
              </div>
              <div className="space-y-4 pt-12">
                <StaggerItem>
                  <img
                    src={laser}
                    alt="Advanced aesthetic equipment"
                    className="aspect-[3/4] w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </StaggerItem>
                <StaggerItem>
                  <img
                    src={clinic}
                    alt="Modern dermatology clinic interior"
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </StaggerItem>
              </div>
            </Stagger>
          </div>
          <Stagger className="lg:col-span-6">
            <StaggerItem>
              <p className="eyebrow">Why SHS</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Premium care, grounded in science.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 text-muted-foreground">
                A practice built on clinical excellence, ethical recommendations and an aesthetic that
                respects you. Every protocol begins with a careful diagnosis — never a template.
              </p>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-10 divide-y divide-foreground/10">
                {WHY.map((w) => (
                  <li key={w.title} className="flex items-start gap-5 py-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <w.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium">{w.title}</p>
                      <p className="text-sm text-muted-foreground">{w.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Real Results</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">
              Before & after, side by side.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Drag the slider to see real transformations from our clinical protocols.
            </p>
          </div>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            <StaggerItem><BeforeAfter before={baAcneBefore} after={baAcneAfter} label="Acne" /></StaggerItem>
            <StaggerItem><BeforeAfter before={baPigmentBefore} after={baPigmentAfter} label="Pigmentation" /></StaggerItem>
            <StaggerItem><BeforeAfter before={baHairBefore} after={baHairAfter} label="Hair Restoration" /></StaggerItem>
          </Stagger>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Patient Stories</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">
              Trusted by thousands across North Karnataka.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "My skin has never looked better. The team is genuinely caring and the results speak for themselves.",
                n: "Aishwarya P.",
                c: "Acne & Pigmentation",
              },
              {
                q: "After years of hair fall, the PRP protocol at SHS finally gave me visible regrowth in 4 months.",
                n: "Rohan D.",
                c: "Hair Loss",
              },
              {
                q: "Honest advice, no upselling — and a clinic that feels truly premium. Highly recommended.",
                n: "Meera J.",
                c: "Anti-Aging",
              },
            ].map((t) => (
              <figure key={t.n} className="rounded-2xl border border-foreground/10 bg-card p-8">
                <div className="flex gap-0.5 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                      <path d="M10 1l2.7 6.1l6.6.6l-5 4.5l1.5 6.5L10 15.4L4.2 18.7l1.5-6.5l-5-4.5l6.6-.6z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <p className="font-medium">{t.n}</p>
                  <p className="text-muted-foreground">{t.c}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PHARMA */}
      <section className="bg-foreground py-16 md:py-24 text-background">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <img
              src={pharma}
              alt="SHS Pharma serums"
              width={1200}
              height={1400}
              className="aspect-[5/6] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow text-[var(--gold)]">SHS Pharma</p>
            <h2 className="mt-4 font-display text-3xl text-background md:text-5xl">
              Clinical formulations, designed by our specialists.
            </h2>
            <p className="mt-5 text-background/70">
              A curated range of dermaceutical actives — cleansers, serums, sunscreens and hair
              tonics — formulated to complement your in-clinic treatments.
            </p>
            <Link to="/pharma" className="btn-gold mt-9">
              Explore the Range <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Your Journey</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">
              Considered care, every step of the way.
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-foreground/10 md:grid-cols-4">
            {JOURNEY.map((j) => (
              <li key={j.n} className="bg-secondary p-8">
                <p className="font-display text-4xl text-primary">{j.n}</p>
                <p className="mt-6 font-medium">{j.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{j.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24 text-primary-foreground">
        <img
          src={laser}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="container-x relative grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">Begin Today</p>
            <h2 className="mt-4 font-display text-4xl text-primary-foreground md:text-7xl">
              Book your consultation.
            </h2>
            <p className="mt-5 max-w-xl text-primary-foreground/80">
              Speak with our dermatologists about your concerns — and leave with a clear,
              personalised path forward.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link to="/contact" className="btn-gold">
              Book Consultation
            </Link>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
