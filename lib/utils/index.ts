import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { z } from "zod"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function schema() {
  return z.object({
    name: z.string().min(2).max(100).regex(/^[a-zA-Z ]+$/),
    email: z.string().email().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    message: z.string().min(10).max(500).regex(/^[a-zA-Z0-9 ]+$/),
  })
}