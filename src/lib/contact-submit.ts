import type { ContactInput } from "./contact-schema";

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "failed" };

export async function submitContactMessage(
  data: ContactInput,
  accessKey: string | undefined,
): Promise<ContactResult> {
  if (!accessKey) return { ok: false, reason: "not_configured" };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio: ${data.subject}`,
        from_name: data.name,
        name: data.name,
        email: data.email,
        message: data.message,
        botcheck: data.botcheck ?? "",
      }),
    });
    const result: unknown = await response.json();

    if (
      !response.ok ||
      typeof result !== "object" ||
      result === null ||
      !("success" in result) ||
      result.success !== true
    ) {
      return { ok: false, reason: "failed" };
    }

    return { ok: true };
  } catch {
    return { ok: false, reason: "failed" };
  }
}
