import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Please enter a subject").max(150, "Subject must be under 150 characters"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000, "Message must be under 2000 characters"),
  botcheck: z.string().optional(),
});
export type ContactInput = z.infer<typeof contactSchema>;
