import { aiPillars, projects } from "@/data/portfolio";
import { Section } from "@/components/portfolio/Section";
import { Reveal } from "@/components/portfolio/Reveal";
import { Diagram } from "@/components/portfolio/Diagram";
import { DynamicIcon } from "@/components/portfolio/DynamicIcon";
import { TechTag } from "@/components/portfolio/TechTag";

export function AIEngineering() {
  const sa = projects.find((p) => p.id === "superagent");
  return (
    <Section id="ai" eyebrow="06 · AI & Engineering" title="AI as an engineering amplifier — governed by tests, not hope.">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <article className="h-full rounded-sm border border-primary/30 bg-card p-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-primary">Featured · {sa?.company}</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">SuperAgent</h3>
            <p className="mt-2 text-muted-foreground">{sa?.summary} {sa?.contribution}</p>
            <div className="mt-5 rounded-sm border border-border bg-background/50 p-2">
              <Diagram kind="agents" className="h-auto w-full" label="SuperAgent workflow: task to planner and coder agents, gated by TDD, with a memory loop" />
            </div>
            <p className="mt-2 font-mono text-[0.65rem] text-muted-foreground">Conceptual illustration, not production architecture.</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">{sa?.highlights.map((h) => <li key={h}><TechTag label={h} tier="architecture" /></li>)}</ul>
          </article>
        </Reveal>
        <ul className="grid gap-3">
          {aiPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <li className="flex gap-4 rounded-sm border border-border bg-card p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-accent text-accent-foreground"><DynamicIcon name={p.icon} className="h-4 w-4" /></span>
                <div><h3 className="text-sm font-semibold">{p.title}</h3><p className="mt-1 text-sm text-muted-foreground">{p.text}</p></div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
