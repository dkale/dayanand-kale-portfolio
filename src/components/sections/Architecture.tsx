import { useState } from "react";
import { BookOpen } from "lucide-react";
import { architecture, type ArchTopic } from "@/data/portfolio";
import { Section } from "@/components/portfolio/Section";
import { Reveal } from "@/components/portfolio/Reveal";
import { Diagram } from "@/components/portfolio/Diagram";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function Architecture() {
  const [sel, setSel] = useState<ArchTopic | null>(null);
  const cs = sel?.caseStudy;
  return (
    <Section id="architecture" eyebrow="05 · Architecture" title="How I think about systems."
      intro="Patterns I design with regularly. Diagrams are conceptual illustrations, not production architecture.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {architecture.map((a, i) => (
          <Reveal key={a.id} delay={(i % 4) * 0.04}>
            <article className="flex h-full flex-col rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/40">
              <Diagram kind={a.diagram} className="h-auto w-full rounded-sm border border-border" label={`Conceptual diagram: ${a.title}`} />
              <h3 className="mt-4 font-semibold leading-snug">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.summary}</p>
              {a.caseStudy && (
                <button onClick={() => setSel(a)} className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:underline">
                  <BookOpen aria-hidden className="h-4 w-4" /> Read case study<span className="sr-only">: {a.title}</span>
                </button>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-sm">
          {sel && cs && (
            <>
              <DialogHeader>
                <p className="eyebrow">Architecture case study</p>
                <DialogTitle className="text-2xl">{sel.title}</DialogTitle>
                <DialogDescription>{cs.problem}</DialogDescription>
              </DialogHeader>
              <div className="rounded-sm border border-border p-2"><Diagram kind={sel.diagram} className="h-auto w-full" label={`Conceptual diagram: ${sel.title}`} /></div>
              <p className="font-mono text-[0.65rem] text-muted-foreground">Conceptual illustration, not production architecture.</p>
              <div><h4 className="eyebrow">Proposed architecture</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cs.architecture}</p></div>
              <div className="grid gap-6 sm:grid-cols-2">
                <List title="Constraints" items={cs.constraints} />
                <List title="Key components" items={cs.components} />
                <List title="Design decisions" items={cs.decisions} />
                <List title="Trade-offs" items={cs.tradeoffs} />
                <List title="Scalability, reliability & security" items={cs.quality} />
                <List title="Lessons learned" items={cs.lessons} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="eyebrow">{title}</h4>
      <ul className="mt-2 space-y-1.5 text-sm">{items.map((t) => <li key={t} className="flex gap-2"><span aria-hidden className="text-primary">→</span><span className="text-muted-foreground">{t}</span></li>)}</ul>
    </div>
  );
}
