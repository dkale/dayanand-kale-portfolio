import { expertise } from "@/data/portfolio";
import { Section } from "@/components/portfolio/Section";
import { Reveal } from "@/components/portfolio/Reveal";
import { TechTag } from "@/components/portfolio/TechTag";
import { DynamicIcon } from "@/components/portfolio/DynamicIcon";
import { cn } from "@/lib/utils";

export function Expertise() {
  return (
    <Section id="expertise" eyebrow="02 · Expertise" title="System design grounded in hands-on engineering."
      intro="Grouped by discipline. Highlighted groups represent system-design and engineering areas I apply in practice.">
      <div className="mb-8 flex flex-wrap gap-4 font-mono text-[0.7rem] text-muted-foreground" aria-label="Legend">
        <span className="flex items-center gap-2"><TechTag label="Architecture" tier="architecture" /> design focus</span>
        <span className="flex items-center gap-2"><TechTag label="Core" tier="core" /> daily stack</span>
        <span className="flex items-center gap-2"><TechTag label="Tool" tier="tool" /> practices & tooling</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.05} className={cn(i === 0 && "lg:col-span-2")}>
            <article className={cn("h-full rounded-sm border bg-card p-6 transition-colors hover:border-primary/40", g.tier === "architecture" ? "border-primary/30" : "border-border")}>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-sm border border-border bg-accent text-accent-foreground"><DynamicIcon name={g.icon} className="h-4 w-4" /></span>
                <h3 className="font-semibold">{g.group}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{g.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((t) => <li key={t}><TechTag label={t} tier={g.tier} /></li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
