import { z } from "zod";

export const registerValidationSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, "Username at least 3 characters long")
    .max(20, "Username at most 20 characters long"),

  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email address"),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password at least 8 characters")
    .max(20, "Password at most 20 characters"),

  designation: z
    .string({
      required_error: "Designation is required",
    })
    .min(2, "Please provide a valid designation")
    .max(50, "Designation should not exceed 50 characters"),

  bio: z
    .string({
      required_error: "Bio is required",
    })
    .min(10, "Bio at least 10 characters long")
    .max(300, "Bio should not exceed 300 characters"),

  country: z
    .string({
      required_error: "Country selection is required",
    })
    .min(2, "Please provide a valid country"),

  profileImage: z
    .instanceof(File)
    .optional()
    .refine((file) => file === undefined || (file && file.size > 0), "Profile image is too large or not selected")
    .refine((file) => !file || (file && ['image/jpeg', 'image/png'].includes(file.type)), "Only JPEG and PNG images are allowed"),
});


export const loginValidationSchema = z.object({

  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email address"),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password at least 8 characters")
    .max(20, "Password at most 20 characters"),
});