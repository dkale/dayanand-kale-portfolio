import { useRef, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Linkedin, Loader2, Mail, MapPin, Phone, Send, TriangleAlert } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { contactSchema } from "@/lib/contact-schema";
import { sendContact } from "@/lib/contact.functions";
import { Section } from "@/components/portfolio/Section";
import { cn } from "@/lib/utils";

type Fields = "name" | "email" | "subject" | "message";
type Status = { kind: "idle" | "sending" | "sent" } | { kind: "error"; text: string };

export function Contact() {
  const send = useServerFn(sendContact);
  const startedAt = useRef(Date.now());
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const linkedin = socials.find((s) => s.kind === "linkedin");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const input = {
      name: String(fd.get("name") ?? ""), email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""), message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""), startedAt: startedAt.current,
    };
    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
      const errs: Partial<Record<Fields, string>> = {};
      for (const issue of parsed.error.issues) { const k = issue.path[0] as Fields; if (!errs[k]) errs[k] = issue.message; }
      setErrors(errs);
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus({ kind: "sending" });
    try {
      const res = await send({ data: parsed.data });
      if (res.ok) { setStatus({ kind: "sent" }); form.reset(); startedAt.current = Date.now(); return; }
      setStatus({ kind: "error", text: res.reason === "not_configured"
        ? `The contact form isn't set up yet. Please email me directly at ${profile.email}.`
        : res.reason === "spam" ? "That was a little quick — please wait a moment and try again."
        : `Your message couldn't be sent. Please try again or email ${profile.email}.` });
    } catch {
      setStatus({ kind: "error", text: `Your message couldn't be sent. Please try again or email ${profile.email}.` });
    }
  }

  return (
    <Section id="contact" eyebrow="08 · Contact" title="Let's build scalable, intelligent systems together."
      intro="Open to architecture roles, consulting and conversations about distributed systems or AI-assisted engineering.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/50">
            <Mail aria-hidden className="h-5 w-5 text-primary" /><span><span className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">Email</span><span className="font-medium">{profile.email}</span></span>
          </a>
          <a href={profile.phoneHref} className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/50">
            <Phone aria-hidden className="h-5 w-5 text-primary" /><span><span className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">Phone</span><span className="font-medium">{profile.phone}</span></span>
          </a>
          {linkedin && (
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/50">
              <Linkedin aria-hidden className="h-5 w-5 text-primary" /><span><span className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">LinkedIn</span><span className="font-medium">dayanand-kale</span><span className="sr-only"> (opens in new tab)</span></span>
            </a>
          )}
          <div className="flex items-center gap-3 rounded-sm border border-border bg-card p-4">
            <MapPin aria-hidden className="h-5 w-5 text-primary" /><span><span className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">Location</span><span className="font-medium">{profile.location}</span></span>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-sm border border-border bg-card p-6" aria-describedby="contact-status">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" error={errors.name} autoComplete="name" />
            <Field name="email" label="Email" type="email" error={errors.email} autoComplete="email" />
          </div>
          <div className="mt-4"><Field name="subject" label="Subject" error={errors.subject} /></div>
          <div className="mt-4"><Field name="message" label="Message" error={errors.message} textarea /></div>
          {/* Honeypot: hidden from people, bots fill it in. */}
          <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status.kind === "sending"} className="inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">
              {status.kind === "sending" ? <><Loader2 aria-hidden className="h-4 w-4 animate-spin" /> Sending…</> : <><Send aria-hidden className="h-4 w-4" /> Send message</>}
            </button>
            <p id="contact-status" role="status" aria-live="polite" className="text-sm">
              {status.kind === "sent" && <span className="flex items-center gap-2 text-primary"><CheckCircle2 aria-hidden className="h-4 w-4" /> Thanks — your message was sent. I'll reply soon.</span>}
              {status.kind === "error" && <span className="flex items-start gap-2 text-destructive"><TriangleAlert aria-hidden className="mt-0.5 h-4 w-4 shrink-0" /> {status.text}</span>}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({ name, label, error, type = "text", textarea, autoComplete }: { name: Fields; label: string; error?: string | undefined; type?: string; textarea?: boolean; autoComplete?: string }) {
  const id = `contact-${name}`;
  const cls = cn("mt-1.5 w-full rounded-sm border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary", error ? "border-destructive" : "border-input");
  const common = { id, name, "aria-invalid": !!error || undefined, "aria-describedby": error ? `${id}-err` : undefined, className: cls };
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      {textarea ? <textarea {...common} rows={5} maxLength={2000} /> : <input {...common} type={type} autoComplete={autoComplete} />}
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
