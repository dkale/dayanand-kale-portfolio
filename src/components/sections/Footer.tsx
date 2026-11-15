import { useEffect, useState } from "react";
import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export function Footer() {
  const [show, setShow] = useState(false);
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
    const on = () => setShow(window.scrollY > 800);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const linkedin = socials.find((s) => s.kind === "linkedin");
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-8">
        <p>© {year ?? ""} {profile.name} · {profile.title}</p>
        <div className="flex items-center gap-2">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-sm border border-border hover:text-foreground"><Mail className="h-4 w-4" /></a>
          {linkedin && <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="grid h-9 w-9 place-items-center rounded-sm border border-border hover:text-foreground"><Linkedin className="h-4 w-4" /></a>}
        </div>
      </div>
      <a href="#home" aria-label="Back to top" tabIndex={show ? 0 : -1} aria-hidden={!show}
        className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-sm border border-border bg-card text-foreground shadow-md transition-all hover:border-primary/50 ${show ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}>
        <ArrowUp className="h-4 w-4" />
      </a>
    </footer>
  );
}
