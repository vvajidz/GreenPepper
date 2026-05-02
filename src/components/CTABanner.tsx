import { Link } from "@tanstack/react-router";
import { restaurant } from "@/data/menu";

export function CTABanner() {
  return (
    <section id="order" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-16 text-center">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <div className="font-display tracking-[0.4em] text-xs text-primary mb-4">
              SAVOR THE MOMENT
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-gradient-gold mb-4">
              Ready to Experience Green Pepper?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Order online, reserve a table, or plan your next celebration with us — we are ready to
              host you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
              >
                Order Now
              </a>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full glass border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              >
                Book a Table
              </Link>
              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full glass border border-primary/40 text-foreground hover:bg-primary/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
