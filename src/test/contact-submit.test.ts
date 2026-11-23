import { afterEach, describe, expect, it, vi } from "vitest";
import { submitContactMessage } from "@/lib/contact-submit";
import type { ContactInput } from "@/lib/contact-schema";

const message: ContactInput = {
  name: "Ana",
  email: "ana@example.com",
  subject: "Hello",
  message: "A message long enough",
  botcheck: "",
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Web3Forms contact submission", () => {
  it("reports missing configuration without making a request", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(submitContactMessage(message, undefined)).resolves.toEqual({
      ok: false,
      reason: "not_configured",
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts the message and accepts a successful Web3Forms response", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await expect(submitContactMessage(message, "public-key")).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining('"access_key":"public-key"'),
      }),
    );
  });

  it("reports unsuccessful Web3Forms responses", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: false }),
    }));

    await expect(submitContactMessage(message, "public-key")).resolves.toEqual({
      ok: false,
      reason: "failed",
    });
  });
});
