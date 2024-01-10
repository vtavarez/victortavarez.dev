import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
 
/**
 * Combines multiple class names into a single string.
 * 
 * @param inputs - The class names to be combined.
 * @returns The combined class names as a string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns a schema object for validating input data.
 * @returns {import("zod").ZodObject} The schema object.
 */
export function schema() {
  return z.object({
    name: z.string().min(2).max(100).regex(/^[a-zA-Z ]+$/),
    email: z.string().email().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    message: z.string().min(10).max(500).regex(/^[a-zA-Z0-9 ]+$/),
  })
}