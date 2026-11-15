import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Section } from "@/components/portfolio/Section";
import { Reveal } from "@/components/portfolio/Reveal";
import { TechTag } from "@/components/portfolio/TechTag";
import { Diagram } from "@/components/portfolio/Diagram";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function Projects() {
  const [sel, setSel] = useState<Project | null>(null);
  return (
    <Section id="projects" eyebrow="04 · Projects" title="Selected work across platforms, frameworks and AI tooling.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.05}>
            <article className="group flex h-full flex-col rounded-sm border border-border bg-card transition-colors hover:border-primary/40">
              <div className="border-b border-border bg-background/50 p-2"><Diagram kind={p.diagram} className="h-auto w-full" label={`Conceptual diagram of ${p.title}`} /></div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">{p.company}</p>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <li key={t}><TechTag label={t} /></li>)}</ul>
                <button onClick={() => setSel(p)} className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:underline">
                  View case study <ArrowUpRight aria-hidden className="h-4 w-4" /><span className="sr-only">: {p.title}</span>
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-sm">
          {sel && (
            <>
              <DialogHeader>
                <p className="eyebrow">{sel.company}</p>
                <DialogTitle className="text-2xl">{sel.title}</DialogTitle>
                <DialogDescription>{sel.summary}</DialogDescription>
              </DialogHeader>
              <div className="rounded-sm border border-border bg-background/50 p-2"><Diagram kind={sel.diagram} className="h-auto w-full" label={`Conceptual diagram of ${sel.title}`} /></div>
              <p className="font-mono text-[0.65rem] text-muted-foreground">Conceptual illustration, not production architecture.</p>
              <Block title="Context">{sel.context}</Block>
              <Block title="My role">{sel.contribution}</Block>
              <div>
                <h4 className="eyebrow">Highlights</h4>
                <ul className="mt-2 space-y-1.5 text-sm">{sel.highlights.map((h) => <li key={h} className="flex gap-2"><span aria-hidden className="text-primary">→</span>{h}</li>)}</ul>
              </div>
              <ul className="flex flex-wrap gap-1.5">{sel.tech.map((t) => <li key={t}><TechTag label={t} /></li>)}</ul>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return <div><h4 className="eyebrow">{title}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p></div>;
}
