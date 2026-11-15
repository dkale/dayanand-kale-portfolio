import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Section } from "@/components/portfolio/Section";
import { Reveal } from "@/components/portfolio/Reveal";

export function Education() {
  return (
    <Section id="education" eyebrow="07 · Education" title="Education & certifications">
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <article className="h-full rounded-sm border border-border bg-card p-6">
              <GraduationCap aria-hidden className="h-5 w-5 text-primary" />
              <p className="mt-4 font-mono text-xs text-primary">{e.year}</p>
              <h3 className="mt-1 font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
            </article>
          </Reveal>
        ))}
        <Reveal delay={0.1}>
          <article className="h-full rounded-sm border border-dashed border-border p-6">
            <Award aria-hidden className="h-5 w-5 text-muted-foreground" />
            <h3 className="mt-4 font-semibold">Certifications</h3>
            {certifications.length ? (
              <ul className="mt-2 space-y-1 text-sm">{certifications.map((c) => <li key={c.title}>{c.title} · {c.issuer} ({c.year})</li>)}</ul>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">Coming soon.</p>
            )}
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
