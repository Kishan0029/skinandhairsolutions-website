import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { W as WhatsAppIcon, h as heroSkin, a as hair, l as laser, p as pharma, d as doctor, b as baAcneAfter } from "./router-4OuW_AuS.mjs";
import { B as BeforeAfter, b as baAcneBefore, a as baPigmentAfter, c as baPigmentBefore, d as baHairAfter, e as baHairBefore } from "./ba-hair-after-Cprw3Nf5.mjs";
import { a as Stagger, b as StaggerItem, F as FadeIn, S as SlideUp } from "./motion-Bhh8wT2F.mjs";
import { c as clinic } from "./clinic-interior-DEuX9cMF.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowUpRight, S as Sparkles, e as ShieldCheck, n as Award, j as Stethoscope, o as Microscope, p as HeartHandshake } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Counter({
  value,
  suffix = "",
  duration = 1800
}) {
  const [n, setN] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (t) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "tabular-nums", children: [
    n.toLocaleString("en-IN"),
    suffix
  ] });
}
const homeSkinCare = "/assets/home-skin-care-DUrKP-5W.png";
const homeSkinRejuvenation = "/assets/home-skin-rejuvenation-BxKi7KRK.png";
const SERVICES = [{
  title: "Skin Care",
  desc: "Acne, pigmentation, melasma & medical dermatology.",
  to: "/skin-treatments",
  img: homeSkinCare
}, {
  title: "Hair Care",
  desc: "Hair fall, PRP therapy, regrowth & trichology.",
  to: "/hair-treatments",
  img: hair
}, {
  title: "Laser Treatments",
  desc: "FDA-cleared lasers for hair, skin & rejuvenation.",
  to: "/aesthetic-treatments",
  img: laser
}, {
  title: "Aesthetic Procedures",
  desc: "Skin tightening, peels and contouring.",
  to: "/aesthetic-treatments",
  img: clinic
}, {
  title: "Skin Rejuvenation",
  desc: "Hydrafacial, mesotherapy and glow protocols.",
  to: "/aesthetic-treatments",
  img: homeSkinRejuvenation
}, {
  title: "Anti-Aging",
  desc: "Botox, fillers & advanced rejuvenation.",
  to: "/aesthetic-treatments",
  img: pharma
}];
const WHY = [{
  icon: Stethoscope,
  title: "Experienced Specialists",
  body: "Board-certified dermatologists and trichologists."
}, {
  icon: Microscope,
  title: "Advanced Equipment",
  body: "Globally certified medical-grade technology."
}, {
  icon: HeartHandshake,
  title: "Personalised Plans",
  body: "Treatment protocols tailored to your skin & goals."
}, {
  icon: ShieldCheck,
  title: "Scientific Approach",
  body: "Evidence-based, ethical and result-driven care."
}, {
  icon: Award,
  title: "Trusted Care",
  body: "Thousands of patients across North Karnataka."
}];
const JOURNEY = [{
  n: "01",
  t: "Book Appointment",
  d: "Reserve a consultation online or via WhatsApp."
}, {
  n: "02",
  t: "Diagnosis",
  d: "Detailed skin & scalp analysis with our specialists."
}, {
  n: "03",
  t: "Treatment Plan",
  d: "A personalised, transparent care plan."
}, {
  n: "04",
  t: "Results",
  d: "Visible, measurable, sustained outcomes."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary pt-32 pb-16 md:pt-40 md:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[var(--gold)]/20 blur-3xl float-slow", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative grid gap-12 lg:grid-cols-12 lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Belagavi · Since years of trust" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "reveal mt-6 font-display text-[2.8rem] leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[5.25rem]", children: [
            "Healthy Skin.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Stronger Hair.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "Greater Confidence." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground", children: "Advanced skin and hair treatments powered by dermatology expertise, modern technology and deeply personalised care." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "btn-primary", children: [
              "Book Appointment ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919000000000", target: "_blank", rel: "noopener noreferrer", className: "btn-outline inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
              " WhatsApp Consultation"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[var(--gold)]" }),
              " Certified"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-[var(--gold)]" }),
              " Ethical"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5 text-[var(--gold)]" }),
              " Trusted"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.3, className: "relative lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-beige", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroSkin, alt: "Healthy glowing skin", width: 1280, height: 1600, className: "h-full w-full object-cover", fetchPriority: "high" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500" }),
            " Now accepting appointments"
          ] }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-line mx-auto mb-14 w-24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid grid-cols-2 gap-y-12 md:grid-cols-4", children: [{
        v: 1e4,
        s: "+",
        l: "Patients Treated"
      }, {
        v: 5e3,
        s: "+",
        l: "Hair Solutions"
      }, {
        v: 5e3,
        s: "+",
        l: "Skin Procedures"
      }, {
        v: 98,
        s: "%",
        l: "Patient Satisfaction"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-5xl text-primary md:text-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: s.v, suffix: s.s }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: s.l })
      ] }, s.l)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Our Care" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl font-display text-4xl md:text-5xl", children: "A complete spectrum of dermatology, trichology & aesthetic medicine." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/skin-treatments", className: "hidden link-underline text-sm font-medium text-primary md:inline-block", children: "Explore all →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SlideUp, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 transition-shadow hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-6 h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
        ] })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-14 lg:grid-cols-12 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: doctor, alt: "Experienced dermatologist consultation", className: "aspect-[4/5] w-full rounded-2xl object-cover", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] w-full rounded-2xl bg-secondary p-8 flex flex-col justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-10 w-10 text-[var(--gold)] mb-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary", children: "Clinical Excellence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Board-certified specialists delivering evidence-based care." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: laser, alt: "Advanced aesthetic equipment", className: "aspect-[3/4] w-full rounded-2xl object-cover", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: clinic, alt: "Modern dermatology clinic interior", className: "aspect-[4/5] w-full rounded-2xl object-cover", loading: "lazy" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "lg:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Why SHS" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl leading-tight md:text-5xl", children: "Premium care, grounded in science." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "A practice built on clinical excellence, ethical recommendations and an aesthetic that respects you. Every protocol begins with a careful diagnosis — never a template." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 divide-y divide-foreground/10", children: WHY.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-5 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: w.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: w.body })
          ] })
        ] }, w.title)) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Real Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Before & after, side by side." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Drag the slider to see real transformations from our clinical protocols." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "mt-12 grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, { before: baAcneBefore, after: baAcneAfter, label: "Acne" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, { before: baPigmentBefore, after: baPigmentAfter, label: "Pigmentation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, { before: baHairBefore, after: baHairAfter, label: "Hair Restoration" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "btn-outline", children: "View Full Gallery" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Patient Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Trusted by thousands across North Karnataka." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: [{
        q: "My skin has never looked better. The team is genuinely caring and the results speak for themselves.",
        n: "Aishwarya P.",
        c: "Acne & Pigmentation"
      }, {
        q: "After years of hair fall, the PRP protocol at SHS finally gave me visible regrowth in 4 months.",
        n: "Rohan D.",
        c: "Hair Loss"
      }, {
        q: "Honest advice, no upselling — and a clinic that feels truly premium. Highly recommended.",
        n: "Meera J.",
        c: "Anti-Aging"
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-2xl border border-foreground/10 bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-[var(--gold)]", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 20 20", className: "h-4 w-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 1l2.7 6.1l6.6.6l-5 4.5l1.5 6.5L10 15.4L4.2 18.7l1.5-6.5l-5-4.5l6.6-.6z" }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-5 font-display text-xl leading-snug", children: [
          '"',
          t.q,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: t.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: t.c })
        ] })
      ] }, t.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground py-24 text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-14 lg:grid-cols-12 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pharma, alt: "SHS Pharma serums", width: 1200, height: 1400, className: "aspect-[5/6] w-full rounded-2xl object-cover", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-[var(--gold)]", children: "SHS Pharma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-background md:text-5xl", children: "Clinical formulations, designed by our specialists." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-background/70", children: "A curated range of dermaceutical actives — cleansers, serums, sunscreens and hair tonics — formulated to complement your in-clinic treatments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pharma", className: "btn-gold mt-9", children: [
          "Explore the Range ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Your Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Considered care, every step of the way." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-14 grid gap-px overflow-hidden rounded-3xl bg-foreground/10 md:grid-cols-4", children: JOURNEY.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-secondary p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-primary", children: j.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-medium", children: j.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: j.d })
      ] }, j.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-primary py-24 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: laser, alt: "", "aria-hidden": true, className: "absolute inset-0 h-full w-full object-cover opacity-10", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative grid gap-10 md:grid-cols-12 md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-[var(--gold)]", children: "Begin Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-5xl text-primary-foreground md:text-7xl", children: "Book your consultation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-primary-foreground/80", children: "Speak with our dermatologists about your concerns — and leave with a clear, personalised path forward." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 md:col-span-4 md:justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-gold", children: "Book Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919000000000", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
            " WhatsApp"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Home as component
};
