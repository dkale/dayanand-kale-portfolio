import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = { name: "Ana", email: "ana@example.com", subject: "Hello", message: "A message long enough", startedAt: 0 };

describe("contact form validation", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("requires a message of at least 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "too short" }).success).toBe(false);
  });
  it("caps the message at 2000 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "x".repeat(2001) }).success).toBe(false);
  });
});
