import { z } from "zod";

export const blogValidationSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long.")
    .max(100, "Title must not exceed 100 characters."),
  content: z
    .string()
    .min(20, "Content must be at least 20 characters long."),
  blogPhoto: z
  .instanceof(File)
  .optional()
  .refine((file) => file === undefined || (file && file.size > 0), "Profile image is too large or not selected")
  .refine((file) => !file || (file && ['image/jpeg', 'image/png'].includes(file.type)), "Only JPEG and PNG images are allowed"),
});