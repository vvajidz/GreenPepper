import { Phone, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/menu";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${restaurant.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 grid place-items-center rounded-full bg-[oklch(0.65_0.18_145)] text-white shadow-soft hover:scale-110 transition-transform"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={`tel:${restaurant.phones[0].replace(/\s/g, "")}`}
        aria-label="Call"
        className="h-14 w-14 grid place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold hover:scale-110 transition-transform"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
