import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const authSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Verification code should be at least 6 characters long",
    })
    .max(6),
});
