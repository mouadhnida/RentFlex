import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const UserProfileSchema = z.object({
  firstName: z
    .string()
    .min(6, { message: "First name should be at least 6 characters long" }),
  lastName: z
    .string()
    .min(6, { message: "Last name should be at least 6 characters long" }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.number(),
  bio: z
    .string()
    .min(16, { message: "Bio should be at least 16 characters long" }),
});
