import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const UserProfileSchema = z.object({
  firstName: z.string().max(60),
  lastName: z.string().max(60),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  bio: z
    .string()
    .refine(
      (value) => value === "" || (value.length >= 16 && value.length <= 320),
      {
        message:
          "Bio should be at least 16 characters long and at most 320  characters long",
      }
    ),
});
