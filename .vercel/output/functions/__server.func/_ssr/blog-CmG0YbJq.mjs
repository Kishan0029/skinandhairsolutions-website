import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DZeKzZhs.mjs";
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
import "./motion-Bhh8wT2F.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const POSTS = [{
  c: "Skin Care",
  t: "How to build a minimalist routine for acne-prone skin",
  d: "5 min read",
  e: "The fewer the actives, the clearer the results — a dermatology-led approach to acne."
}, {
  c: "Hair Care",
  t: "Understanding hair fall: when to worry, when to act",
  d: "7 min read",
  e: "Daily shedding is normal — until it isn't. Here's how trichologists think about hair loss."
}, {
  c: "Treatment Guides",
  t: "What to expect from PRP: a complete patient guide",
  d: "8 min read",
  e: "Sessions, downtime, results — everything you should know before your first session."
}, {
  c: "Seasonal",
  t: "Monsoon skin care for South Indian humidity",
  d: "4 min read",
  e: "Humidity, fungal flares and the simple changes that protect your skin."
}, {
  c: "Dermatology",
  t: "Pigmentation 101: melasma, PIH and sun damage",
  d: "6 min read",
  e: "Why pigmentation looks similar but needs very different treatment."
}, {
  c: "Skin Care",
  t: "Sunscreen, decoded: SPF, PA and what really matters",
  d: "5 min read",
  e: "How to choose a sunscreen that works for Indian skin."
}];
function Blog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Blog", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Considered writing on ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "skin & hair." })
    ] }), lede: "Expert-written, evidence-based guidance from the specialists at SHS." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-10 md:grid-cols-2 lg:grid-cols-3", children: POSTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl bg-secondary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-xs uppercase tracking-[0.22em] text-[var(--gold)]", children: [
        p.c,
        " · ",
        p.d
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-2xl leading-snug group-hover:text-primary", children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: p.e }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "mt-5 link-underline self-start text-sm font-medium text-primary", children: "Read article →" })
    ] }, p.t)) }) })
  ] });
}
export {
  Blog as component
};
