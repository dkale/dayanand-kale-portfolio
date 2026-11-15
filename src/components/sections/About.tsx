import { Calendar, Languages, Mail, MapPin, Phone } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import { Section } from "@/components/portfolio/Section";
import { Reveal } from "@/components/portfolio/Reveal";

export function About() {
  const facts = [
    { icon: MapPin, label: "Based in", value: profile.location },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: Languages, label: "Languages", value: profile.languages.join(", ") },
    { icon: Calendar, label: "Date of birth", value: profile.dateOfBirth },
  ];
  return (
    <Section id="about" eyebrow="01 · About" title="From developer to architect — fifteen years of building systems that last.">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}><p className={i === 0 ? "text-foreground" : undefined}>{p}</p></Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <aside aria-label="Quick facts" className="rounded-sm border border-border bg-card p-6">
            <p className="eyebrow">profile.json</p>
            <dl className="mt-5 space-y-4">
              {facts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">{label}</dt>
                    <dd className="mt-0.5 break-words text-sm font-medium">
                      {href ? <a href={href} className="hover:text-primary">{value}</a> : value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
