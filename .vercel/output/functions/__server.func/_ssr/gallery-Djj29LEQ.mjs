import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-DZeKzZhs.mjs";
import { b as baAcneBefore, a as baPigmentAfter, c as baPigmentBefore, d as baHairAfter, e as baHairBefore, B as BeforeAfter } from "./ba-hair-after-Cprw3Nf5.mjs";
import { F as FadeIn, S as SlideUp } from "./motion-Bhh8wT2F.mjs";
import { b as baAcneAfter } from "./router-4OuW_AuS.mjs";
import "../_libs/sonner.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
const ITEMS = [{
  cat: "Acne",
  before: baAcneBefore,
  after: baAcneAfter,
  l: "Acne clearance — 12 weeks"
}, {
  cat: "Pigmentation",
  before: baPigmentBefore,
  after: baPigmentAfter,
  l: "Melasma — 16 weeks"
}, {
  cat: "Hair Loss",
  before: baHairBefore,
  after: baHairAfter,
  l: "PRP regrowth — 6 months"
}];
const FILTERS = ["All", "Acne", "Pigmentation", "Hair Loss", "Scars"];
function Gallery() {
  const [active, setActive] = reactExports.useState("All");
  const items = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Real Results", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Transformations, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "honestly shown." })
    ] }), lede: "Every result is from a real patient on a real protocol. Drag the slider to compare." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { className: "flex flex-wrap gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(f), className: `rounded-full border px-5 py-2 text-sm transition-colors ${active === f ? "border-primary bg-primary text-primary-foreground" : "border-foreground/15 hover:border-foreground"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: items.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(SlideUp, { delay: idx * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, { before: i.before, after: i.after, label: i.cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-3 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: i.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: i.cat })
        ] })
      ] }) }, idx)) })
    ] }) })
  ] });
}
export {
  Gallery as component
};
