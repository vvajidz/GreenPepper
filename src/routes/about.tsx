import { createFileRoute } from "@tanstack/react-router";
import banquet from "@/assets/banquet-hall.jpg";
import hero from "@/assets/hero-mandhi.jpg";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTABanner } from "@/components/CTABanner";
import { Award, Heart, Leaf, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Pepper Family Restaurant" },
      {
        name: "description",
        content:
          "A family kitchen turned premium restaurant and banquet hall — the story of Green Pepper.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="font-display tracking-[0.4em] text-xs text-primary mb-4">EST. 2009</div>
          <h1 className="font-serif text-5xl md:text-6xl text-gradient-gold mb-4">Our Story</h1>
          <p className="text-muted-foreground leading-relaxed">
            Born from a family kitchen, Green Pepper has grown into one of the region's most loved
            dining and banquet destinations.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={hero}
            alt="Mandhi tradition"
            loading="lazy"
            className="rounded-3xl shadow-soft border border-primary/20"
          />
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-5">
              A taste rooted in tradition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We started with a single charcoal pit and a single recipe. Today, our chefs honor
              those same techniques — slow heat, fresh spices, and patience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every plate that leaves our kitchen carries the warmth of a family meal and the
              precision of a fine restaurant.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="WHAT WE STAND FOR" title="Crafted, Not Cooked">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Leaf />,
              title: "Fresh Daily",
              text: "Locally sourced ingredients prepared the same morning.",
            },
            {
              icon: <Heart />,
              title: "Family First",
              text: "Recipes passed from grandmother to grandson.",
            },
            {
              icon: <Award />,
              title: "Award-Winning",
              text: "Recognized for our signature Mandhi & hospitality.",
            },
            {
              icon: <Users />,
              title: "Built for Gatherings",
              text: "From quiet dinners to 500-guest weddings.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="glass-strong rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="h-12 w-12 mx-auto rounded-full bg-gradient-gold grid place-items-center text-primary-foreground mb-4">
                {v.icon}
              </div>
              <h3 className="font-serif text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-5">
              More Than a Restaurant
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Beyond our kitchen, our banquet hall has hosted weddings, anniversaries and corporate
              evenings — each one a memory we are proud to be part of.
            </p>
          </div>
          <img
            src={banquet}
            alt="Banquet hall"
            loading="lazy"
            className="order-1 lg:order-2 rounded-3xl shadow-soft border border-primary/20"
          />
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
