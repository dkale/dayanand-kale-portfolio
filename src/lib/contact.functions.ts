import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

export type ContactResult = { ok: true } | { ok: false; reason: "not_configured" | "spam" | "failed" };

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }): Promise<ContactResult> => {
    // Honeypot + minimum fill time: silently reject bots.
    if (data.website || Date.now() - data.startedAt < 3000) return { ok: false, reason: "spam" };
    const key = process.env["WEB3FORMS_ACCESS_KEY"];
    if (!key) return { ok: false, reason: "not_configured" };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Portfolio: ${data.subject}`,
          from_name: data.name,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean };
      return res.ok && json.success ? { ok: true } : { ok: false, reason: "failed" };
    } catch {
      return { ok: false, reason: "failed" };
    }
  });
