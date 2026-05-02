import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Sparkles, UtensilsCrossed } from "lucide-react";
import heroMandhi from "@/assets/hero-mandhi.jpg";
import banquet from "@/assets/banquet-hall.jpg";
import logo from "@/assets/logo.png";
import { mandhiSpecials, menuPreview, restaurant } from "@/data/menu";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FoodCard } from "@/components/FoodCard";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Pepper Kuwait — Authentic Mandhi & Banquet Hall" },
      {
        name: "description",
        content:
          "Signature Honey Al Faham, Peri Peri & Mutton Mandhi at Green Pepper Family Restaurant — Farwaniya, Kuwait.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up" className="animate-fade-up">
            <img 
              src={logo} 
              alt="Green Pepper Restaurant Logo" 
              className="w-64 md:w-96 mb-8 drop-shadow-2xl mx-auto lg:mx-0" 
            />
            <div className="font-display tracking-[0.4em] text-xs text-primary mb-6">
              ✦ FARWANIYA · KUWAIT ✦
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Experience <span className="text-gradient-gold italic">Authentic Mandhi</span> Like
              Never Before
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Slow-smoked over coal, layered with saffron rice and crafted from generations of
              tradition. Welcome to Kuwait's home of premium Mandhi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                Order Now <ArrowRight size={18} />
              </a>
              <Link
                to="/mandhi"
                className="px-7 py-3.5 rounded-full glass border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              >
                Explore Mandhi
              </Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-primary/15">
              <Stat value="50+" label="Menu Specials" />
              <Stat value="10K+" label="Happy Guests" />
              <Stat value="500" label="Banquet Capacity" />
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" className="relative animate-float">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-transparent blur-3xl scale-110 pointer-events-none" />
            {/* Image with golden border */}
            <div className="relative overflow-hidden rounded-3xl shadow-gold steam border-2 border-primary/60">
              <img
                src={heroMandhi}
                alt="Signature Mandhi platter"
                width={1280}
                height={960}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="text-xs text-muted-foreground tracking-widest uppercase">
                Signature
              </div>
              <div className="font-serif text-primary text-xl">Royal Mandhi</div>
            </div>
            <div className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="text-xs text-muted-foreground tracking-widest uppercase">★★★★★</div>
              <div className="font-serif text-foreground text-sm">Award Winning</div>
            </div>
          </div>
        </div>

        {/* Hero cards */}
        <div className="container mx-auto px-6 mt-20 grid md:grid-cols-3 gap-6">
          {mandhiSpecials.map((m, i) => (
            <div
              key={m.id}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="glass-strong rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                className="h-20 w-20 rounded-xl object-cover ring-1 ring-primary/30"
              />
              <div className="min-w-0">
                <div className="text-xs text-primary tracking-widest uppercase mb-1">
                  {m.tagline}
                </div>
                <div className="font-serif text-lg truncate">{m.name}</div>
                <div dir="rtl" className="text-xs text-muted-foreground truncate">
                  {m.nameAr}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANDHI HIGHLIGHT */}
      <SectionWrapper
        eyebrow="HOUSE OF MANDHI"
        title="Our Signature Mandhi"
        subtitle="Three flavors, one obsession with perfection. Each plate is built on charcoal heat, slow time, and aromatic rice."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {mandhiSpecials.map((m) => (
            <FoodCard
              data-aos="fade-up"
              key={m.id}
              name={m.name}
              nameAr={m.nameAr}
              tagline={m.tagline}
              description={m.description}
              image={m.image}
              price={m.full}
              steam
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/mandhi"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-display tracking-widest text-sm"
          >
            VIEW ALL MANDHI <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      {/* MENU PREVIEW */}
      <SectionWrapper
        eyebrow="FROM THE KITCHEN"
        title="A Taste of the Menu"
        subtitle="From sizzling starters to slow biriyani and Kerala classics — a curated selection of guest favorites."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuPreview.map((d) => (
            <FoodCard
              key={d.name}
              name={d.name}
              tagline={d.category}
              image={d.image}
              price={d.price}
              featured={d.featured}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="px-7 py-3.5 rounded-full glass border border-primary/40 text-primary hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
          >
            See Full Menu <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      {/* ABOUT */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="relative">
            <img
              src={banquet}
              alt="Green Pepper banquet hall"
              loading="lazy"
              className="rounded-3xl shadow-soft border border-primary/20"
            />
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 hidden md:block">
              <div className="font-display text-3xl text-primary">15+</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase">
                Years of Hospitality
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="150">
            <div className="font-display tracking-[0.4em] text-xs text-primary mb-4">OUR STORY</div>
            <h2 className="font-serif text-4xl md:text-5xl text-gradient-gold mb-6">
              A Family Tradition of Flavor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Green Pepper began as a family kitchen with one mission — to bring authentic Mandhi,
              Kerala classics and warm hospitality under one roof.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Today we host families, friends and grand celebrations in our luxurious banquet hall,
              while never losing the soul of the original family recipes.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Feature icon={<Flame />} label="Charcoal Slow-Cooked" />
              <Feature icon={<Sparkles />} label="Premium Ingredients" />
              <Feature icon={<UtensilsCrossed />} label="Family Recipes" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* BANQUET */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <div className="font-display tracking-[0.4em] text-xs text-primary mb-4">
              CELEBRATIONS
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-gradient-gold mb-6">
              A Banquet Hall Built for Memories
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Weddings, engagements, birthdays, corporate events — our elegant banquet hall hosts up
              to 500 guests with bespoke menus and full event management.
            </p>
            <ul className="space-y-3 text-sm text-foreground/90 mb-8">
              {[
                "Up to 500 guests",
                "Custom menu planning",
                "Stage, lighting & decor",
                "In-house catering team",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/banquet"
              className="px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Book the Hall <ArrowRight size={18} />
            </Link>
          </div>
          <div data-aos="fade-left" data-aos-delay="150" className="order-1 lg:order-2 relative">
            <img
              src={banquet}
              alt="Banquet hall"
              loading="lazy"
              className="rounded-3xl shadow-soft border border-primary/20"
            />
          </div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-3xl text-primary">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="text-center glass rounded-xl p-4">
      <div className="text-primary mx-auto mb-2 grid place-items-center">{icon}</div>
      <div className="text-xs text-muted-foreground tracking-wide">{label}</div>
    </div>
  );
}
