import type { ReactNode } from "react";

export function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container mx-auto px-6">
        {(eyebrow || title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            {eyebrow && (
              <div className="font-display tracking-[0.4em] text-xs text-primary mb-4">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-serif text-gradient-gold mb-4">{title}</h2>
            )}
            {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
            <div className="gold-divider w-32 mx-auto mt-6" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
