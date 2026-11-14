import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const ids = navItems.map((n) => n.id);

export function Header() {
  const active = useActiveSection(ids);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-50 border-b transition-colors", scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background/0")}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
          <span className="grid h-8 w-8 place-items-center rounded-sm border border-primary/50 bg-accent font-mono text-xs font-semibold text-accent-foreground">{profile.initials}</span>
          <span className="hidden text-sm font-semibold sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}
                  className={cn("rounded-sm px-3 py-2 text-sm transition-colors hover:text-foreground", active === n.id ? "text-primary font-semibold" : "text-muted-foreground")}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href={profile.resumeUrl} download={profile.resumeFileName}
            className="hidden h-10 items-center gap-2 rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex">
            <Download className="h-4 w-4" /> Résumé
          </a>
          <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-sm border border-border lg:hidden">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={cn("block py-3 text-sm", active === n.id ? "text-primary font-semibold" : "text-muted-foreground")}>{n.label}</a>
              </li>
            ))}
            <li><a href={profile.resumeUrl} download={profile.resumeFileName} className="mt-2 flex items-center gap-2 py-3 text-sm font-semibold text-primary"><Download className="h-4 w-4" /> Download Résumé</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
