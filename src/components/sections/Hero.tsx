import { ArrowRight, Download, Linkedin, MapPin, User } from "lucide-react";
import { highlights, profile, socials } from "@/data/portfolio";
import { Reveal } from "@/components/portfolio/Reveal";

export function Hero() {
  const linkedin = socials.find((s) => s.kind === "linkedin");
  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div aria-hidden className="glow-accent pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:px-8 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {profile.location}</p>
          <h1 id="home-title" className="mt-5 text-5xl font-extrabold tracking-tight md:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-lg font-semibold text-primary">{profile.title}</p>
          <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"><Download className="h-4 w-4" /> Download Résumé</a>
            <a href="#contact" className="inline-flex h-11 items-center gap-2 rounded-sm border border-border bg-card px-5 text-sm font-semibold transition-colors hover:border-primary/50">Let's Connect <ArrowRight className="h-4 w-4" /></a>
            {linkedin && <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)" className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-card transition-colors hover:border-primary/50"><Linkedin className="h-4 w-4" /></a>}
          </div>
          <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted-foreground" aria-label="Focus areas">
            {profile.heroTags.map((t, i) => (
              <li key={t} className="flex items-center gap-3">{i > 0 && <span aria-hidden className="text-border">|</span>}{t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
          <Portrait />
        </Reveal>
      </div>
      <div className="relative border-t border-border bg-card/60">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-border px-5 md:grid-cols-4 md:divide-x md:px-8">
          {highlights.map((h) => (
            <div key={h.label} className="px-2 py-6 md:px-6">
              <dt className="sr-only">{h.label}</dt>
              <dd className="text-2xl font-bold tracking-tight md:text-3xl">{h.value}</dd>
              <dd className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative">
      {/* architectural frame */}
      <svg aria-hidden viewBox="0 0 100 125" className="absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)]">
        <rect x="2" y="2" width="96" height="121" className="fill-none stroke-primary/30" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
        {[[2, 2], [98, 2], [2, 123], [98, 123]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.2" className="fill-primary" />)}
        <line x1="98" y1="40" x2="100" y2="40" className="stroke-primary" strokeWidth="0.4" />
      </svg>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-muted">
        {profile.photoUrl ? (
          <img src={profile.photoUrl} alt={`Portrait of ${profile.name}`} width={480} height={600} fetchPriority="high" className="h-full w-full object-cover object-top" />
        ) : (
          <div className="grid h-full place-items-center text-muted-foreground"><User className="h-16 w-16" /><span className="font-mono text-xs">Photo placeholder</span></div>
        )}
      </div>
      <div className="absolute -bottom-4 -left-4 rounded-sm border border-border bg-card px-3 py-2 font-mono text-[0.7rem] shadow-sm">
        <span className="text-primary">●</span> architect.status = <span className="text-primary">"hands-on"</span>
      </div>
    </div>
  );
}
