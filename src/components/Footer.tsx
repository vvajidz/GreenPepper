import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { restaurant } from "@/data/menu";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-primary/15">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Green Pepper" className="h-12 w-12" />
            <div className="font-display text-gradient-gold tracking-widest">GREEN PEPPER</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Authentic Mandhi, Kerala flavors and a luxurious banquet experience in the heart of
            Farwaniya, Kuwait.
          </p>
        </div>

        <div>
          <h4 className="font-display text-primary tracking-widest text-sm mb-4">EXPLORE</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mandhi" className="hover:text-primary">
                Mandhi Special
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-primary">
                Full Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/banquet" className="hover:text-primary">
                Banquet Hall
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-primary tracking-widest text-sm mb-4">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />{" "}
              <span>{restaurant.address}</span>
            </li>
            {restaurant.phones.map((p) => (
              <li key={p} className="flex gap-2">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />{" "}
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex gap-2">
              <Mail size={16} className="text-primary mt-0.5 shrink-0" />{" "}
              <a href={`mailto:${restaurant.email}`} className="hover:text-primary break-all">
                {restaurant.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-primary tracking-widest text-sm mb-4">HOURS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Clock size={16} className="text-primary mt-0.5" /> Mon – Sun
            </li>
            <li>11:00 AM – 11:30 PM</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {restaurant.instagram.map((ig) => (
              <a
                key={ig.handle}
                href={ig.url}
                target="_blank"
                rel="noreferrer"
                aria-label={ig.handle}
                className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-primary/20 text-primary"
              >
                <Instagram size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="gold-divider" />
      <div className="container mx-auto px-6 py-6 text-center text-xs text-muted-foreground tracking-wide">
        © {new Date().getFullYear()} Green Pepper Family Restaurant & Banquet Hall. Crafted with
        passion.
      </div>
    </footer>
  );
}
