import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { restaurant } from "@/data/menu";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Green Pepper Kuwait" },
      {
        name: "description",
        content: "Visit Green Pepper in Farwaniya, Kuwait. Call, WhatsApp, or reserve a table.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const tel = restaurant.phones[0].replace(/\s/g, "");

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div data-aos="fade-down" className="font-display tracking-[0.4em] text-xs text-primary mb-4">SAY HELLO</div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="font-serif text-5xl md:text-6xl text-gradient-gold mb-4">
            Visit Us in Farwaniya
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-muted-foreground">
            We would love to host you. Reach out for reservations, orders or events.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right" className="space-y-5">
            <ContactCard
              icon={<MapPin />}
              title="Address"
              lines={[restaurant.name, restaurant.address]}
              href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
            />
            <ContactCard
              icon={<Phone />}
              title="Phone"
              lines={restaurant.phones}
              href={`tel:${tel}`}
            />
            <ContactCard
              icon={<MessageCircle />}
              title="WhatsApp"
              lines={["Tap to chat instantly"]}
              href={`https://wa.me/${restaurant.whatsapp}`}
            />
            <ContactCard
              icon={<Mail />}
              title="Email"
              lines={[restaurant.email]}
              href={`mailto:${restaurant.email}`}
            />
            <ContactCard
              icon={<Instagram />}
              title="Instagram"
              lines={restaurant.instagram.map((i) => i.handle)}
              href={restaurant.instagram[0].url}
            />
          </div>

          <form
            data-aos="fade-left"
            data-aos-delay="150"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-strong rounded-3xl p-8 space-y-5"
          >
            <h2 className="font-serif text-2xl text-gradient-gold mb-2">Reserve a Table</h2>
            <Field label="Name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Date" name="date" type="date" />
              <Field label="Guests" name="guests" type="number" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-primary mb-2">
                Message
              </label>
              <textarea
                rows={3}
                className="w-full rounded-xl bg-background/40 border border-primary/20 px-4 py-3 outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <button className="w-full px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition-transform">
              {sent ? "Thank you! We will be in touch." : "Send Reservation"}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Or WhatsApp us directly at{" "}
              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                {restaurant.phones[0]}
              </a>
            </p>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass-strong rounded-2xl p-6 flex items-start gap-4 hover:border-primary/40 transition-colors block"
    >
      <div className="h-11 w-11 grid place-items-center rounded-full bg-gradient-gold text-primary-foreground shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-display tracking-widest text-xs text-primary mb-1">
          {title.toUpperCase()}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-foreground/85 text-sm break-words">
            {l}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-primary mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-xl bg-background/40 border border-primary/20 px-4 py-3 outline-none focus:border-primary/60 transition-colors"
      />
    </div>
  );
}
