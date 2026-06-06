import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-DZeKzZhs.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { F as FadeIn, S as SlideUp } from "./motion-Bhh8wT2F.mjs";
import { p as pharma } from "./router-4OuW_AuS.mjs";
import { d as ShoppingBag, T as Truck, e as ShieldCheck, R as RotateCcw, f as Heart, g as Star, h as Minus, i as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "../_libs/isbot.mjs";
const PRODUCTS = [{
  id: "p1",
  t: "Gentle Cleanser",
  c: "Skin",
  b: "Hydrating, non-stripping daily cleanse.",
  u: "AM / PM",
  i: "Glycerin, Panthenol",
  price: 690,
  mrp: 790,
  rating: 4.7,
  reviews: 128,
  badge: "Bestseller"
}, {
  id: "p2",
  t: "Brightening Serum",
  c: "Skin",
  b: "Fades dark spots, evens skin tone.",
  u: "AM",
  i: "Vitamin C, Niacinamide",
  price: 1490,
  mrp: 1690,
  rating: 4.8,
  reviews: 214
}, {
  id: "p3",
  t: "Retinol Renewal",
  c: "Skin",
  b: "Smooths texture, refines pores.",
  u: "PM",
  i: "Encapsulated Retinol 0.3%",
  price: 1890,
  rating: 4.6,
  reviews: 96,
  badge: "New"
}, {
  id: "p4",
  t: "Mineral Sunscreen",
  c: "Skin",
  b: "Broad spectrum, no white cast.",
  u: "AM",
  i: "Zinc Oxide, Titanium Dioxide",
  price: 990,
  mrp: 1190,
  rating: 4.9,
  reviews: 342,
  badge: "Bestseller"
}, {
  id: "p5",
  t: "Hair Density Tonic",
  c: "Hair",
  b: "Strengthens follicles, reduces fall.",
  u: "Nightly",
  i: "Peptides, Biotin",
  price: 1690,
  rating: 4.5,
  reviews: 78
}, {
  id: "p6",
  t: "Scalp Restore Shampoo",
  c: "Hair",
  b: "Balances oil, calms scalp.",
  u: "3× weekly",
  i: "Salicylic Acid, Zinc PCA",
  price: 890,
  mrp: 990,
  rating: 4.6,
  reviews: 154
}];
const FILTERS = ["All", "Skin", "Hair"];
function Pharma() {
  const [cart, setCart] = reactExports.useState({});
  const [wishlist, setWishlist] = reactExports.useState({});
  const [filter, setFilter] = reactExports.useState("All");
  const add = (p) => {
    setCart((c) => ({
      ...c,
      [p.id]: (c[p.id] ?? 0) + 1
    }));
    toast.success(`Added to cart — ${p.t}`);
  };
  const dec = (id) => setCart((c) => {
    const next = {
      ...c
    };
    if (!next[id]) return next;
    next[id] -= 1;
    if (next[id] <= 0) delete next[id];
    return next;
  });
  const toggleWish = (id) => setWishlist((w) => ({
    ...w,
    [id]: !w[id]
  }));
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0);
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.c === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "SHS Pharma · Shop", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Clinical formulations, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "designed in-house." })
    ] }), lede: "A focused range of dermaceutical actives, formulated to complement your in-clinic care." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background pt-10 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mb-10 flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-full bg-secondary p-1", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `rounded-full px-5 py-2 text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`, children: f }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-full border border-foreground/10 bg-card px-5 py-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
            cartCount,
            " item",
            cartCount === 1 ? "" : "s"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base text-primary", children: [
            "₹",
            cartTotal.toLocaleString("en-IN")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mb-10 grid gap-3 rounded-2xl bg-secondary p-5 text-xs text-foreground/70 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 text-primary" }),
          " Free shipping over ₹1,499"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary" }),
          " 100% authentic, clinic-grade"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4 text-primary" }),
          " 7-day easy returns"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: list.map((p, i) => {
        const qty = cart[p.id] ?? 0;
        const off = p.mrp ? Math.round((p.mrp - p.price) / p.mrp * 100) : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SlideUp, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-shadow hover:shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pharma, alt: p.t, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 flex gap-2", children: [
              p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground", children: p.badge }),
              off > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal", children: [
                "-",
                off,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleWish(p.id), "aria-label": "Wishlist", className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground/70 backdrop-blur transition-colors hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-4 w-4 ${wishlist[p.id] ? "fill-primary text-primary" : ""}` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]", children: p.c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-xl", children: p.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.b }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-xs text-foreground/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-0.5 text-[var(--gold)]", children: Array.from({
                length: 5
              }).map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-3.5 w-3.5 ${i2 < Math.round(p.rating) ? "fill-current" : ""}` }, i2)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.rating }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                "(",
                p.reviews,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 grid grid-cols-2 gap-3 border-t border-foreground/10 pt-4 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Use" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-0.5 font-medium", children: p.u })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Actives" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-0.5 font-medium", children: p.i })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-end justify-between gap-3 pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl text-primary", children: [
                  "₹",
                  p.price.toLocaleString("en-IN")
                ] }),
                p.mrp && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground line-through", children: [
                  "₹",
                  p.mrp.toLocaleString("en-IN")
                ] })
              ] }),
              qty === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => add(p), className: "btn-primary !px-5 !py-2.5 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
                " Add to Cart"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => dec(p.id), "aria-label": "Decrease", className: "grid h-10 w-10 place-items-center hover:bg-[var(--wine)] rounded-l-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-6 text-center text-sm font-medium", children: qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => add(p), "aria-label": "Increase", className: "grid h-10 w-10 place-items-center hover:bg-[var(--wine)] rounded-r-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
              ] })
            ] })
          ] })
        ] }) }, p.id);
      }) })
    ] }) })
  ] });
}
export {
  Pharma as component
};
