import { z } from "zod";

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(6, 'Must be at least 6 characters long'),
  newPassword: z.string().min(6, 'Must be at least 6 characters long'),
});