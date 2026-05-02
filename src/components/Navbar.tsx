import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { restaurant } from "@/data/menu";

const links = [
  { to: "/", label: "Home" },
  { to: "/mandhi", label: "Mandhi Special" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/banquet", label: "Banquet" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 backdrop-blur-xl bg-[oklch(0.16_0.04_150/0.85)] border-b border-primary/15"
          : "py-4 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Green Pepper"
            className="h-11 w-11 object-contain drop-shadow-[0_0_12px_oklch(0.82_0.13_85/0.4)]"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-base text-gradient-gold tracking-widest">
              GREEN PEPPER
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Restaurant & Banquet
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={`https://wa.me/${restaurant.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold tracking-wide shadow-gold hover:scale-105 transition-transform"
          >
            Order Now
          </a>
        </div>

        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 animate-fade-up">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/90 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
