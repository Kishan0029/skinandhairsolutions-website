import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-DZeKzZhs.mjs";
import { S as SlideUp, F as FadeIn, a as Stagger, b as StaggerItem } from "./motion-Bhh8wT2F.mjs";
import { W as WhatsAppIcon } from "./router-4OuW_AuS.mjs";
import "../_libs/sonner.mjs";
import { j as Stethoscope, V as Video, C as Clock, k as CircleCheck, l as CreditCard, a as MapPin, P as Phone, b as Mail, m as TriangleAlert } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
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
const schema = objectType({
  name: stringType().trim().min(2).max(80),
  phone: stringType().trim().min(7).max(20).regex(/^[+\d\s-]+$/),
  email: stringType().trim().email().max(160),
  date: stringType().min(1, "Please select a preferred date"),
  time: stringType().min(1, "Please select a preferred time"),
  type: enumType(["in-clinic", "online"]),
  reason: stringType().trim().min(2).max(120)
});
function Contact() {
  const [status, setStatus] = reactExports.useState("idle");
  const [error, setError] = reactExports.useState(null);
  const onSubmit = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Visit Us", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Begin your ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "consultation." })
    ] }), lede: "Share a few details and our team will confirm your appointment within working hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-14 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SlideUp, { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "relative overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-card/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 mix-blend-overlay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 font-display text-3xl", children: "Appointment Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", type: "text", placeholder: "Jane Doe", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone number", name: "phone", type: "tel", placeholder: "+91 90000 00000", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email address", name: "email", type: "email", placeholder: "jane@example.com", required: true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Consultation Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-foreground/15 bg-background p-4 text-center transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "type", value: "in-clinic", className: "peer sr-only", defaultChecked: true }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-6 w-6 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "In-Clinic" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-foreground/15 bg-background p-4 text-center transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "type", value: "online", className: "peer sr-only" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-6 w-6 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Online (Video)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preferred Date", name: "date", type: "date", required: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Preferred Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "time", required: true, className: "w-full appearance-none rounded-xl border border-foreground/15 bg-background py-3 pl-10 pr-4 text-sm outline-none focus:border-primary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, selected: true, children: "Select a slot" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "morning", children: "Morning (10:00 AM - 1:00 PM)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "afternoon", children: "Afternoon (1:00 PM - 4:00 PM)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "evening", children: "Evening (4:00 PM - 7:30 PM)" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Reason for Visit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "reason", rows: 3, placeholder: "Please briefly describe your skin or hair concerns...", required: true, className: "mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-start gap-3 rounded-xl bg-primary/5 p-4 text-sm text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Our team will contact you to confirm your appointment." }),
                " Please note that submitting this form requests a slot, but the exact time is subject to clinic availability."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-foreground/10 pt-8 md:flex-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919000000000", className: "btn-outline w-full justify-center gap-2 md:w-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
                " WhatsApp Instead"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-primary w-full md:w-auto", children: "Book Appointment" })
            ] }),
            status === "ok" && /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Request Received!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Thank you. Our front desk will call you shortly to confirm your booking." })
            ] }),
            status === "err" && /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm font-medium text-destructive", children: error }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "grid gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-secondary p-8 ring-1 ring-foreground/5 transition-transform hover:-translate-y-1 hover:shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-display text-xl text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5" }),
              " Working Hours"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 divide-y divide-foreground/10 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Monday – Saturday" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "10:00 AM – 7:30 PM" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Sunday" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-destructive", children: "Closed" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-primary/20 bg-primary/5 p-8 transition-transform hover:-translate-y-1 hover:shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-display text-xl text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" }),
              " Consultation Fee"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Standard in-clinic doctor consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-3xl", children: "₹500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "*Follow-ups within 7 days are complimentary. Procedure costs vary based on treatment plan." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-8 shadow-sm ring-1 ring-foreground/5 transition-transform hover:-translate-y-1 hover:shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-4 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tilakwadi, Belagavi, Karnataka 590006" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+91 90000 00000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "care@skinandhairsolutions.in" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border-l-4 border-amber-500 bg-amber-500/10 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-amber-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-amber-800", children: "Medical Emergency?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-relaxed text-amber-700/80", children: "We are an elective dermatology and aesthetic clinic. If you are experiencing a severe allergic reaction, burns, or a medical emergency, please visit your nearest hospital emergency room immediately." })
            ] })
          ] }) }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-card p-2 sm:p-4 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-[2rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "SHS Belagavi", src: "https://www.google.com/maps?q=Tilakwadi%20Belagavi&output=embed", className: "h-[400px] md:h-[600px] w-full border-0 grayscale-[0.2]", loading: "lazy" }) }) }) }) })
  ] });
}
function Field({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary" })
  ] });
}
export {
  Contact as component
};
