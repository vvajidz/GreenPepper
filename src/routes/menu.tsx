import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { fullMenu, fmt } from "@/data/menu";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Full Menu — Green Pepper Kuwait" },
      {
        name: "description",
        content:
          "Browse the complete Green Pepper menu — Mandhi, Biriyani, Burgers, Kerala specials, drinks and desserts. Prices in KD.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const categories = ["All", ...Object.keys(fullMenu)];
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? Object.entries(fullMenu) : [[active, fullMenu[active]] as const];

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="font-display tracking-[0.4em] text-xs text-primary mb-4">
            THE FULL EXPERIENCE
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-gradient-gold mb-4">Our Menu</h1>
          <p className="text-muted-foreground">
            Crafted with care. Priced fairly. Served with pride.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                active === c
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "glass text-foreground/80 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {visible.map(([cat, items]) => (
            <div key={cat}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-serif text-3xl text-gradient-gold">{cat}</h2>
                <div className="flex-1 gold-divider" />
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {items.map((it) => (
                  <div
                    key={it.name}
                    className="flex items-baseline gap-3 py-3 border-b border-primary/10"
                  >
                    <div className="flex-1">
                      <div className="font-serif text-lg text-foreground">{it.name}</div>
                      {it.nameAr && (
                        <div dir="rtl" className="text-xs text-muted-foreground mt-0.5">
                          {it.nameAr}
                        </div>
                      )}
                    </div>
                    <span className="flex-1 border-b border-dotted border-primary/20 mx-2" />
                    <span className="font-display text-primary whitespace-nowrap">
                      {fmt(it.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
