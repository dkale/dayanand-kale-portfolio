import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, eyebrow, title, intro, children, className }: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative border-t border-border py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
