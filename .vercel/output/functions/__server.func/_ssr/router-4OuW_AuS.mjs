import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useMatchRoute } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { X, M as Menu, I as Instagram, F as Facebook, Y as Youtube, a as MapPin, P as Phone, b as Mail, H as House, S as Sparkles, c as Scissors } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-DH-22mPj.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logoUrl = "/assets/shs-logo-B3DhEC8m.svg";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skin-treatments", label: "Skin" },
  { to: "/hair-treatments", label: "Hair" },
  { to: "/aesthetic-treatments", label: "Aesthetic" },
  { to: "/pharma", label: "Pharma" },
  { to: "/gallery", label: "Results" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-foreground/5 py-3" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", "aria-label": "Skin & Hair Solutions home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoUrl,
              alt: "Skin & Hair Solutions",
              className: "h-12 w-auto md:h-14",
              height: 56
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 lg:flex", "aria-label": "Primary", children: NAV.slice(0, -1).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              className: "link-underline text-sm font-medium text-foreground/80 hover:text-foreground",
              activeProps: { className: "text-primary" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-3 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-primary", children: "Book Appointment" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 lg:hidden",
              "aria-label": open ? "Close menu" : "Open menu",
              onClick: () => setOpen((o) => !o),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x mt-3 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: "block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary",
              activeProps: { className: "text-primary" },
              children: n.label
            }
          ) }, n.to)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: () => setOpen(false), className: "btn-primary mt-3 w-full", children: "Book Appointment" })
        ] }) })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-24 bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", children: "Skin & Hair Solutions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase tracking-[0.3em] text-background/60", children: "Belagavi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-background/70", children: "North Karnataka's premium destination for dermatology, trichology and aesthetic medicine — combining scientific expertise with personalised, results-driven care." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              "aria-label": "Instagram",
              className: "grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:border-[var(--gold)] hover:text-[var(--gold)]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              "aria-label": "Facebook",
              className: "grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:border-[var(--gold)] hover:text-[var(--gold)]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              "aria-label": "YouTube",
              className: "grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:border-[var(--gold)] hover:text-[var(--gold)]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-medium uppercase tracking-[0.22em] text-[var(--gold)]", children: "Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/skin-treatments", className: "link-underline", children: "Skin Treatments" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/hair-treatments", className: "link-underline", children: "Hair Treatments" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aesthetic-treatments", className: "link-underline", children: "Aesthetic" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pharma", className: "link-underline", children: "SHS Pharma" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "link-underline", children: "Before & After" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-medium uppercase tracking-[0.22em] text-[var(--gold)]", children: "Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 text-sm text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" }),
            " Tilakwadi, Belagavi, Karnataka 590006"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" }),
            " +91 90000 00000"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" }),
            " ",
            "care@skinandhairsolutions.in"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-background/50", children: "Mon – Sat · 10:00 — 19:30 · Sun by appointment" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 text-xs text-background/50 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Skin & Hair Solutions. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Designed for trust, built for results." })
    ] })
  ] }) });
}
function WhatsAppIcon({ className, size = 16, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      fill: "currentColor",
      viewBox: "0 0 16 16",
      className,
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" })
    }
  );
}
function StickyCTAs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://wa.me/919000000000?text=Hi%20SHS%2C%20I%27d%20like%20a%20consultation",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "WhatsApp consultation",
      className: "fixed bottom-8 right-8 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 md:grid",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-6 w-6" })
    }
  ) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const NAV_ITEMS = [
  { to: "/", label: "Home", icon: House },
  { to: "/skin-treatments", label: "Skin", icon: Sparkles },
  { to: "/contact", label: "Book", icon: Phone, isPrimary: true },
  { to: "/hair-treatments", label: "Hair", icon: Scissors },
  { href: "https://wa.me/919000000000?text=Hi%20SHS%2C%20I%27d%20like%20a%20consultation", label: "WhatsApp", icon: WhatsAppIcon }
];
function NavTab({ to, href, label, icon: Icon }) {
  const matchRoute = useMatchRoute();
  const isActive = to ? !!matchRoute({ to, fuzzy: to === "/" ? false : true }) : false;
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${isActive ? "bg-primary/10 scale-110" : "group-active:scale-95"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            className: `h-[19px] w-[19px] transition-all duration-200 ${isActive ? "text-primary" : "text-foreground/45"}`,
            strokeWidth: isActive ? 2.2 : 1.6
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-[10px] font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-foreground/45"}`,
        children: label
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "group flex flex-col items-center gap-0.5 py-2 px-3", children: content }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", className: "group flex flex-col items-center gap-0.5 py-2 px-3", children: content }) });
}
function PrimaryTab({ to, href, label, icon: Icon }) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "flex h-14 w-14 flex-col items-center justify-center rounded-full transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      style: {
        background: "var(--burgundy)",
        boxShadow: "0 8px 32px -6px color-mix(in oklab, var(--burgundy) 60%, transparent)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-white", strokeWidth: 1.8 })
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col items-center -mt-5", children: [
    to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, "aria-label": label, children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, children: inner }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary", children: label })
  ] });
}
function MobileBottomBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Mobile bottom navigation", className: "fixed inset-x-0 bottom-0 z-50 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "border-t border-foreground/8 px-2",
      style: {
        background: "color-mix(in oklab, white 85%, transparent)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        paddingBottom: "env(safe-area-inset-bottom, 8px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-end justify-around", children: NAV_ITEMS.map(
        (item) => item.isPrimary ? /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryTab, { ...item }, item.to) : /* @__PURE__ */ jsxRuntimeExports.jsx(NavTab, { ...item }, item.to)
      ) })
    }
  ) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow justify-center", children: "Not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-7xl text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-primary mt-8", children: "Return home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please refresh or try again." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "btn-primary",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "btn-outline", children: "Go home" })
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Skin & Hair Solutions — Premium Dermatology & Trichology in Belagavi" },
      {
        name: "description",
        content: "Belagavi's premium skin and hair care destination. Advanced dermatology, trichology, laser and aesthetic treatments by experienced specialists."
      },
      { name: "author", content: "Skin & Hair Solutions" },
      { name: "theme-color", content: "#8A0D4E" },
      { property: "og:site_name", content: "Skin & Hair Solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Skin & Hair Solutions — Premium Dermatology & Trichology in Belagavi"
      },
      {
        name: "twitter:title",
        content: "Skin & Hair Solutions — Premium Dermatology & Trichology in Belagavi"
      },
      {
        property: "og:description",
        content: "Belagavi's premium skin and hair care destination. Advanced dermatology, trichology, laser and aesthetic treatments by experienced specialists."
      },
      {
        name: "twitter:description",
        content: "Belagavi's premium skin and hair care destination. Advanced dermatology, trichology, laser and aesthetic treatments by experienced specialists."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5a70531e-adf0-467e-ba73-9847f6aba990/id-preview-315e071c--226ba5ee-72f4-4cbf-b521-cc2f96461318.lovable.app-1780460955099.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5a70531e-adf0-467e-ba73-9847f6aba990/id-preview-315e071c--226ba5ee-72f4-4cbf-b521-cc2f96461318.lovable.app-1780460955099.png"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Skin & Hair Solutions",
          alternateName: "SHS",
          medicalSpecialty: ["Dermatology", "Trichology", "CosmeticProcedure"],
          areaServed: "Belagavi, Karnataka, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Belagavi",
            addressRegion: "Karnataka",
            postalCode: "590006",
            addressCountry: "IN"
          },
          telephone: "+91-9000000000"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pb-20 lg:pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTAs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const heroSkin = "/assets/hero-skin-B5_xTAyx.png";
const $$splitComponentImporter$8 = () => import("./skin-treatments-ClKjo06E.mjs");
const Route$9 = createFileRoute("/skin-treatments")({
  head: () => ({
    meta: [{
      title: "Skin Specialist in Belagavi — Dermatology Clinic | SHS"
    }, {
      name: "description",
      content: "Acne, pigmentation, melasma, psoriasis, eczema, vitiligo, scars and rejuvenation. Premium dermatology treatments in Belagavi by SHS specialists."
    }, {
      property: "og:title",
      content: "Skin Treatments — SHS Belagavi"
    }, {
      property: "og:description",
      content: "Advanced dermatology treatments for every skin concern."
    }, {
      property: "og:url",
      content: "/skin-treatments"
    }, {
      property: "og:image",
      content: heroSkin
    }, {
      name: "twitter:image",
      content: heroSkin
    }],
    links: [{
      rel: "canonical",
      href: "/skin-treatments"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const BASE_URL = "";
const Route$8 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/skin-treatments", changefreq: "monthly", priority: "0.9" },
          { path: "/hair-treatments", changefreq: "monthly", priority: "0.9" },
          { path: "/aesthetic-treatments", changefreq: "monthly", priority: "0.9" },
          { path: "/pharma", changefreq: "monthly", priority: "0.7" },
          { path: "/gallery", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const pharma = "/assets/pharma-products-C4fgH7zN.png";
const $$splitComponentImporter$7 = () => import("./pharma-BsjNgBSF.mjs");
const Route$7 = createFileRoute("/pharma")({
  head: () => ({
    meta: [{
      title: "SHS Pharma — Clinical Skincare & Haircare Products"
    }, {
      name: "description",
      content: "Shop SHS Pharma — a curated range of dermaceutical cleansers, serums, sunscreens and hair tonics formulated by SHS specialists."
    }, {
      property: "og:title",
      content: "Shop SHS Pharma — Clinical Skincare"
    }, {
      property: "og:description",
      content: "Dermaceutical actives by SHS specialists."
    }, {
      property: "og:url",
      content: "/pharma"
    }, {
      property: "og:image",
      content: pharma
    }, {
      name: "twitter:image",
      content: pharma
    }],
    links: [{
      rel: "canonical",
      href: "/pharma"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const hair = "/assets/hair-care-TC0b_yQI.png";
const $$splitComponentImporter$6 = () => import("./hair-treatments-BnnAW7UU.mjs");
const Route$6 = createFileRoute("/hair-treatments")({
  head: () => ({
    meta: [{
      title: "Hair Specialist in Belagavi — Hair Loss & PRP Treatment | SHS"
    }, {
      name: "description",
      content: "Hair fall, baldness, PRP therapy, regrowth programmes and alopecia management — trichology-led care at SHS Belagavi."
    }, {
      property: "og:title",
      content: "Hair Treatments — SHS Belagavi"
    }, {
      property: "og:description",
      content: "Trichology-led hair fall and regrowth programmes."
    }, {
      property: "og:url",
      content: "/hair-treatments"
    }, {
      property: "og:image",
      content: hair
    }, {
      name: "twitter:image",
      content: hair
    }],
    links: [{
      rel: "canonical",
      href: "/hair-treatments"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const baAcneAfter = "/assets/ba-acne-after-Bvh6RnzP.png";
const $$splitComponentImporter$5 = () => import("./gallery-Djj29LEQ.mjs");
const Route$5 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Before & After Results — SHS Belagavi"
    }, {
      name: "description",
      content: "Real patient transformations from SHS — acne, pigmentation, hair loss and scar treatments. Drag to compare."
    }, {
      property: "og:title",
      content: "Before & After Gallery — SHS"
    }, {
      property: "og:description",
      content: "Real patient transformations."
    }, {
      property: "og:url",
      content: "/gallery"
    }, {
      property: "og:image",
      content: baAcneAfter
    }, {
      name: "twitter:image",
      content: baAcneAfter
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-BRg2Qv-B.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact SHS — Book an Appointment in Belagavi"
    }, {
      name: "description",
      content: "Book a consultation at Skin & Hair Solutions, Belagavi. Phone, email, WhatsApp, location and clinic hours."
    }, {
      property: "og:title",
      content: "Contact SHS — Belagavi"
    }, {
      property: "og:description",
      content: "Book an appointment."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-CmG0YbJq.mjs");
const Route$3 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "The SHS Journal — Skin & Hair Care Insights"
    }, {
      name: "description",
      content: "Expert-written guides on skin care, hair care, seasonal protocols and dermatology education from SHS specialists."
    }, {
      property: "og:title",
      content: "The SHS Journal"
    }, {
      property: "og:description",
      content: "Skin and hair insights from SHS specialists."
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const laser = "/assets/laser-tech-DP6av4TI.png";
const $$splitComponentImporter$2 = () => import("./aesthetic-treatments-Ba-lTWOi.mjs");
const Route$2 = createFileRoute("/aesthetic-treatments")({
  head: () => ({
    meta: [{
      title: "Aesthetic Treatments — Laser, Anti-Aging, Hydrafacial | SHS Belagavi"
    }, {
      name: "description",
      content: "Laser hair reduction, anti-aging, skin tightening, chemical peels and Hydrafacial at Belagavi's premium aesthetic clinic."
    }, {
      property: "og:title",
      content: "Aesthetic Treatments — SHS Belagavi"
    }, {
      property: "og:description",
      content: "Advanced aesthetic medicine — laser, anti-aging and rejuvenation."
    }, {
      property: "og:url",
      content: "/aesthetic-treatments"
    }, {
      property: "og:image",
      content: laser
    }, {
      name: "twitter:image",
      content: laser
    }],
    links: [{
      rel: "canonical",
      href: "/aesthetic-treatments"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const doctor = "/assets/doctor-Bl-p33wL.png";
const $$splitComponentImporter$1 = () => import("./about-BZhdDJU0.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About SHS — Belagavi's Premium Skin & Hair Specialists"
    }, {
      name: "description",
      content: "Meet the specialists, technology and philosophy behind Skin & Hair Solutions — a modern dermatology and trichology clinic in Belagavi."
    }, {
      property: "og:title",
      content: "About Skin & Hair Solutions"
    }, {
      property: "og:description",
      content: "Specialist-led dermatology and trichology in Belagavi."
    }, {
      property: "og:url",
      content: "/about"
    }, {
      property: "og:image",
      content: doctor
    }, {
      name: "twitter:image",
      content: doctor
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dx3SNLlX.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Skin & Hair Solutions — Premium Dermatology Clinic in Belagavi"
    }, {
      name: "description",
      content: "Healthy skin. Stronger hair. Greater confidence. Advanced dermatology, trichology and aesthetic treatments by Belagavi's trusted specialists."
    }, {
      property: "og:title",
      content: "Skin & Hair Solutions — Belagavi's Premium Skin & Hair Clinic"
    }, {
      property: "og:description",
      content: "Advanced treatments. Personalised care. Real results."
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:image",
      content: heroSkin
    }, {
      name: "twitter:image",
      content: heroSkin
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }, {
      rel: "preload",
      as: "image",
      href: heroSkin,
      fetchpriority: "high"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SkinTreatmentsRoute = Route$9.update({
  id: "/skin-treatments",
  path: "/skin-treatments",
  getParentRoute: () => Route$a
});
const SitemapDotxmlRoute = Route$8.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$a
});
const PharmaRoute = Route$7.update({
  id: "/pharma",
  path: "/pharma",
  getParentRoute: () => Route$a
});
const HairTreatmentsRoute = Route$6.update({
  id: "/hair-treatments",
  path: "/hair-treatments",
  getParentRoute: () => Route$a
});
const GalleryRoute = Route$5.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$a
});
const AestheticTreatmentsRoute = Route$2.update({
  id: "/aesthetic-treatments",
  path: "/aesthetic-treatments",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AestheticTreatmentsRoute,
  BlogRoute,
  ContactRoute,
  GalleryRoute,
  HairTreatmentsRoute,
  PharmaRoute,
  SitemapDotxmlRoute,
  SkinTreatmentsRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  WhatsAppIcon as W,
  hair as a,
  baAcneAfter as b,
  doctor as d,
  heroSkin as h,
  laser as l,
  pharma as p,
  router as r
};
