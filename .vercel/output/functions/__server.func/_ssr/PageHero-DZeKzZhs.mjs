import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as Stagger, b as StaggerItem } from "./motion-Bhh8wT2F.mjs";
function PageHero({
  eyebrow,
  title,
  lede,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary pt-36 pb-20 md:pt-44 md:pb-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--gold)]/15 blur-3xl",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "container-x relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: eyebrow }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "reveal mt-5 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl", children: title }) }),
      lede && /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: lede }) }),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children }) })
    ] })
  ] });
}
export {
  PageHero as P
};
