import { ArrowRight } from "lucide-react";
import { fmt } from "@/data/menu";

export function FoodCard({
  name,
  nameAr,
  tagline,
  description,
  image,
  price,
  featured,
  steam,
}: {
  name: string;
  nameAr?: string;
  tagline?: string;
  description?: string;
  image: string;
  price?: number;
  featured?: boolean;
  steam?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl glass-strong shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-gold ${
        featured ? "ring-1 ring-primary/40" : ""
      }`}
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${steam ? "steam" : ""}`}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {tagline && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30">
            {tagline}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="font-serif text-xl text-foreground">{name}</h3>
          {nameAr && (
            <span dir="rtl" className="text-sm text-primary/80 font-medium">
              {nameAr}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        )}
        <div className="flex items-center justify-between">
          {price !== undefined && (
            <span className="font-display text-primary text-lg">{fmt(price)}</span>
          )}
          <a
            href="#order"
            className="ml-auto inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-primary hover:gap-3 transition-all"
          >
            Order Now <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
