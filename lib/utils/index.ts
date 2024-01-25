import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { format } from "date-fns";
/**
 * Combines multiple class names into a single string.
 *
 * @param inputs - The class names to be combined.
 * @returns The combined class names as a string.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dateFormat = "MMMM dd, yyyy";

/**
 * Formats a date into a string using the specified format.
 * @param date - The date to format. Can be a Date object or a string.
 * @returns The formatted date string.
 */
export function formatDate(date: Date | string) {
  return format(new Date(date), dateFormat);
}

/**
 * Error messages for form validation.
 */
const errorMessages = {
  name: {
    required: "Name is Required",
    min: "Name must be 2 or more characters long",
    max: "Name must be 2 or fewer characters long",
    regex: "Name can only contain letters and spaces",
  },
  email: {
    required: "Email is Required",
    invalid: "Invalid email",
  },
  message: {
    required: "Message is Required",
    min: "Message must be 10 or more characters long",
    max: "Message must be 500 or fewer characters long",
    regex: "Message can only contain letters, numbers, and spaces",
  },
};

/**
 * Defines the contact form schema.
 * The schema includes validation rules for the name, email, and message fields.
 */
export const contactSchema = z
  .object({
    name: z
      .string({ required_error: errorMessages.name.required })
      .min(2, { message: errorMessages.name.min })
      .max(100, { message: errorMessages.name.max })
      .regex(/^[a-zA-Z ]+$/, { message: errorMessages.name.regex }),
    email: z
      .string({ required_error: errorMessages.email.required })
      .email({ message: errorMessages.email.invalid }),
    message: z
      .string({ required_error: errorMessages.message.required })
      .min(10, { message: errorMessages.message.min })
      .max(500, { message: errorMessages.message.max })
      .regex(/^[a-zA-Z0-9\s.,!?]+$/, {
        message: errorMessages.message.regex,
      }),
  })
  .required();

/**
 * Represents the schema for a post.
 */
export const postSchema = z.object({
  title: z.string(),
  publishedAt: z.string(),
  excerpt: z.string(),
  readingTime: z.number(),
  slug: z.string(),
  author: z.object({ name: z.string(), image: z.string() }),
  media: z.string(),
});

/**
 * Represents a schema for a list of posts.
 */
export const postListSchema = z.promise(z.array(postSchema));

export const recaptchaSchema = z.object({
  success: z.boolean(),
  score: z.number(),
  action: z.string(),
  challenge_ts: z.string(),
  hostname: z.string(),
  "error-codes": z.array(z.string()).optional(),
});
