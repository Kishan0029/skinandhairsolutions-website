import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import baAcneBefore from "@/assets/ba-acne-before.png";
import baAcneAfter from "@/assets/ba-acne-after.png";
import baPigmentBefore from "@/assets/ba-pigment-before.png";
import baPigmentAfter from "@/assets/ba-pigment-after.png";
import baHairBefore from "@/assets/ba-hair-before.png";
import baHairAfter from "@/assets/ba-hair-after.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Results — SHS Belagavi" },
      {
        name: "description",
        content:
          "Real patient transformations from SHS — acne, pigmentation, hair loss and scar treatments. Drag to compare.",
      },
      { property: "og:title", content: "Before & After Gallery — SHS" },
      { property: "og:description", content: "Real patient transformations." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: baAcneAfter },
      { name: "twitter:image", content: baAcneAfter },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const ITEMS = [
  { cat: "Acne", before: baAcneBefore, after: baAcneAfter, l: "Acne clearance — 12 weeks" },
  { cat: "Pigmentation", before: baPigmentBefore, after: baPigmentAfter, l: "Melasma — 16 weeks" },
  { cat: "Hair Loss", before: baHairBefore, after: baHairAfter, l: "PRP regrowth — 6 months" },
];

const FILTERS = ["All", "Acne", "Pigmentation", "Hair Loss", "Scars"] as const;

function Gallery() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const items = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Real Results"
        title={
          <>
            Transformations, <em className="text-primary not-italic">honestly shown.</em>
          </>
        }
        lede="Every result is from a real patient on a real protocol. Drag the slider to compare."
      />
      <section className="bg-background py-16 md:py-24">
        <div className="container-x">
          <FadeIn className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${active === f ? "border-primary bg-primary text-primary-foreground" : "border-foreground/15 hover:border-foreground"}`}
              >
                {f}
              </button>
            ))}
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((i, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <figure>
                  <BeforeAfter before={i.before} after={i.after} label={i.cat} />
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <span className="font-medium">{i.l}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {i.cat}
                    </span>
                  </figcaption>
                </figure>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
