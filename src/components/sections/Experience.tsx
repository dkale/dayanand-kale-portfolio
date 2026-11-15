import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { experience, type Experience as Exp } from "@/data/portfolio";
import { Section } from "@/components/portfolio/Section";
import { Reveal } from "@/components/portfolio/Reveal";
import { TechTag } from "@/components/portfolio/TechTag";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="Five organizations. One consistent thread: better engineering foundations.">
      <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={0.03 * i}><Item e={e} defaultOpen={i === 0} current={i === 0} /></Reveal>
        ))}
      </ol>
    </Section>
  );
}

function Item({ e, defaultOpen, current }: { e: Exp; defaultOpen: boolean; current: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = `exp-${e.company.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <li className="relative">
      <span aria-hidden className={cn("absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full border-2 md:-left-[2.85rem]", current ? "border-primary bg-primary" : "border-primary/60 bg-background")} />
      <article className="rounded-sm border border-border bg-card">
        <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={id} className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6">
          <div>
            <p className="font-mono text-xs text-primary">{e.period}{current && " · current"}</p>
            <h3 className="mt-1.5 text-lg font-bold tracking-tight md:text-xl">{e.company}</h3>
            <p className="mt-0.5 text-sm font-medium">{e.role}</p>
            {e.location && <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin aria-hidden className="h-3 w-3" />{e.location}</p>}
            <p className="mt-3 text-sm text-muted-foreground">{e.summary}</p>
          </div>
          <ChevronDown aria-hidden className={cn("mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
          <span className="sr-only">{open ? "Hide details" : "Show details"}</span>
        </button>
        {open && (
          <div id={id} className="border-t border-border px-5 pb-6 pt-5 md:px-6">
            <ul className="space-y-3">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-primary/60" />
                  <span>{p.title && <strong className="font-semibold">{p.title}: </strong>}<span className="text-muted-foreground">{p.text}</span></span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
              {e.tags.map((t) => <li key={t}><TechTag label={t} /></li>)}
            </ul>
          </div>
        )}
      </article>
    </li>
  );
}
