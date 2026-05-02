import { createFileRoute } from "@tanstack/react-router";
import heroMandhi from "@/assets/hero-mandhi.jpg";
import { mandhiSpecials, restaurant, fmt, fullMenu } from "@/data/menu";
import { CTABanner } from "@/components/CTABanner";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Flame, Users } from "lucide-react";

export const Route = createFileRoute("/mandhi")({
  head: () => ({
    meta: [
      { title: "Mandhi Special — Green Pepper Kuwait" },
      {
        name: "description",
        content: "Al Faham, Honey Al Faham, Peri Peri & Mutton Mandhi at Green Pepper Kuwait.",
      },
    ],
  }),
  component: MandhiPage,
});

function MandhiPage() {
  const allMandhi = fullMenu["Mandhi"];

  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src={heroMandhi} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div data-aos="fade-down" className="font-display tracking-[0.4em] text-xs text-primary mb-4">
            SIGNATURE COLLECTION
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="font-serif text-5xl md:text-7xl mb-6 text-gradient-gold">
            Mandhi Special
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-muted-foreground text-lg leading-relaxed">
            Charcoal-smoked, slow-perfumed and laid on saffron rice. The pride of our kitchen in
            Farwaniya.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="space-y-20">
          {mandhiSpecials.map((m, i) => (
            <div
              key={m.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div
                data-aos={i % 2 ? "fade-left" : "fade-right"}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl scale-90 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-primary/30 shadow-gold steam">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div data-aos={i % 2 ? "fade-right" : "fade-left"} data-aos-delay="150">
                <div className="font-display tracking-[0.4em] text-xs text-primary mb-3">
                  {m.tagline.toUpperCase()}
                </div>
                <div className="flex items-baseline justify-between gap-3 mb-5 flex-wrap">
                  <h2 className="font-serif text-4xl md:text-5xl text-gradient-gold">{m.name}</h2>
                  <span dir="rtl" className="text-xl text-primary/80">
                    {m.nameAr}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{m.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <PortionCard label="Full" price={m.full} serves="Serves 3–4" />
                  {m.half != null ? (
                    <PortionCard label="Half" price={m.half} serves="Serves 1–2" />
                  ) : (
                    <div className="glass rounded-2xl p-5 opacity-60 grid place-items-center text-xs text-muted-foreground tracking-widest uppercase">
                      Full Only
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${restaurant.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
                  >
                    Order on WhatsApp
                  </a>
                  <a
                    href={`tel:${restaurant.phones[0].replace(/\s/g, "")}`}
                    className="px-7 py-3.5 rounded-full glass border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                  >
                    Call to Reserve
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="ALL MANDHI"
        title="Complete Mandhi Menu"
        subtitle="Pick your favorite — every plate served with rice, sauces and pickles."
      >
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mx-auto">
          {allMandhi.map((it, i) => (
            <div
              key={it.name}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="flex items-baseline gap-3 py-3 border-b border-primary/10"
            >
              <div className="flex-1">
                <div className="font-serif text-lg text-foreground">{it.name}</div>
                {it.nameAr && (
                  <div dir="rtl" className="text-xs text-muted-foreground">
                    {it.nameAr}
                  </div>
                )}
              </div>
              <span className="font-display text-primary whitespace-nowrap">{fmt(it.price)}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}

function PortionCard({ label, price, serves }: { label: string; price: number; serves: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-2 text-primary mb-2">
        {label === "Full" ? <Users size={16} /> : <Flame size={16} />}
        <span className="text-xs tracking-widest uppercase">{label}</span>
      </div>
      <div className="font-display text-2xl text-gradient-gold mb-1">{fmt(price)}</div>
      <div className="text-xs text-muted-foreground">{serves}</div>
    </div>
  );
}
