import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

/**
 * Combines multiple class names into a single string.
 *
 * @param inputs - The class names to be combined.
 * @returns The combined class names as a string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns a schema object for validating input data.
 * @returns {import("zod").ZodObject} The schema object.
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

export function schema() {
  return z
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
}
