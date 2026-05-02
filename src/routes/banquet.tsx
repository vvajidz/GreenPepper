import { createFileRoute } from "@tanstack/react-router";
import banquet from "@/assets/banquet-hall.jpg";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTABanner } from "@/components/CTABanner";
import { Calendar, Sparkles, Users, Utensils } from "lucide-react";
import { restaurant } from "@/data/menu";

export const Route = createFileRoute("/banquet")({
  head: () => ({
    meta: [
      { title: "Banquet Hall & Events — Green Pepper" },
      {
        name: "description",
        content:
          "Host weddings, receptions and corporate events at the Green Pepper Banquet Hall — up to 500 guests.",
      },
    ],
  }),
  component: BanquetPage,
});

function BanquetPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src={banquet} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        </div>
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div data-aos="fade-down" className="font-display tracking-[0.4em] text-xs text-primary mb-4">
            CELEBRATE WITH US
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="font-serif text-5xl md:text-7xl text-gradient-gold mb-6">
            The Banquet Hall
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-muted-foreground text-lg leading-relaxed">
            An elegant venue for weddings, receptions and grand celebrations — designed in deep
            emerald, lit in soft gold.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Users />, label: "500 Guests" },
            { icon: <Utensils />, label: "Custom Catering" },
            { icon: <Sparkles />, label: "Stage & Decor" },
            { icon: <Calendar />, label: "Full Event Planning" },
          ].map((s, i) => (
            <div
              key={s.label}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="glass-strong rounded-2xl p-6 text-center"
            >
              <div className="h-12 w-12 mx-auto rounded-full bg-gradient-gold grid place-items-center text-primary-foreground mb-3">
                {s.icon}
              </div>
              <div className="font-serif">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            data-aos="fade-right"
            src={banquet}
            alt="Banquet hall"
            loading="lazy"
            className="rounded-3xl shadow-soft border border-primary/20"
          />
          <div data-aos="fade-left" data-aos-delay="150">
            <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-5">
              Designed for unforgettable evenings
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Crystal chandeliers, deep-green velvet walls and a stage built for grand entrances.
              Our team handles every detail — from menu design to lighting cues.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Multiple seating layouts",
                "In-house Mandhi & biriyani buffets",
                "Live counters & desserts",
                "Valet & guest concierge",
              ].map((f, i) => (
                <li
                  key={f}
                  data-aos="fade-left"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
            <a
              data-aos="fade-up"
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform inline-flex"
            >
              Book the Hall
            </a>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
