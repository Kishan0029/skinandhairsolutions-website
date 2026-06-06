import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DZeKzZhs.mjs";
import { W as WhatsAppIcon, l as laser } from "./router-4OuW_AuS.mjs";
import { S as SlideUp, F as FadeIn } from "./motion-Bhh8wT2F.mjs";
import "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const PROCEDURES = [{
  t: "Laser Hair Reduction",
  d: "FDA-cleared diode and Nd:YAG lasers, safe for Indian skin."
}, {
  t: "Anti-Aging",
  d: "Botulinum toxin, fillers and biostimulators."
}, {
  t: "Skin Tightening",
  d: "RF, microfocused ultrasound and Profhilo protocols."
}, {
  t: "Chemical Peels",
  d: "Medical-grade peels for tone, texture and pigmentation."
}, {
  t: "Hydrafacial",
  d: "Signature multi-step cleanse, exfoliation and infusion."
}, {
  t: "Advanced Rejuvenation",
  d: "Mesotherapy, exosomes and combination protocols."
}];
function Aesthetic() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Aesthetic Medicine", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Refined results. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "Never overdone." })
    ] }), lede: "Aesthetic medicine should look like nothing — just a better, brighter, more rested version of you.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-primary", children: "Book Consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919000000000", className: "btn-outline inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
        " WhatsApp"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: PROCEDURES.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SlideUp, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 transition-shadow hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: laser, alt: p.t, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-xl", children: p.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.d })
        ] })
      ] }) }, p.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mt-12 rounded-2xl bg-secondary p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "Safe for Indian skin." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm text-muted-foreground", children: "Our protocols are selected and calibrated specifically for South Asian skin types." })
      ] })
    ] }) })
  ] });
}
export {
  Aesthetic as component
};
