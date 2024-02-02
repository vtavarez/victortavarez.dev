import { PrismaClient } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { format } from "date-fns";
import { type TypedObject } from "sanity";

// Tailwind CSS Classnames Merging Utility

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date Formatting

const dateFormat = "MMMM dd, yyyy";

export function formatDate(date: Date | string) {
  return format(new Date(date), dateFormat);
}

// Validation Schemas

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

export const postSchema = z.object({
  _id: z.string(),
  title: z.string(),
  publishedAt: z.string(),
  excerpt: z.string(),
  readingTime: z.number(),
  slug: z.string(),
  author: z.object({ name: z.string(), image: z.string() }),
  media: z.string(),
  body: z.custom<TypedObject>().array().optional(),
});

export const postListSchema = z.array(postSchema);

export const recaptchaSchema = z.object({
  success: z.boolean(),
  score: z.number(),
  action: z.string(),
  challenge_ts: z.string(),
  hostname: z.string(),
  "error-codes": z.array(z.string()).optional(),
  error: z.custom<typeof Error>().optional(),
});

// Prisma Client

class DBConnection {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  private async disconnect() {
    await this.prisma.$disconnect();
  }

  async create(data: { id: string; likes: number }) {
    try {
      const likes = await this.prisma.postLikes.create({ data });
      await this.prisma.$disconnect();
      return likes;
    } catch (error) {
      console.error(error);
    }
  }

  async update(data: { id: string; likes: number }) {
    try {
      const likes = await this.prisma.postLikes.update({
        where: { id: data.id },
        data: { likes: data.likes },
      });
      await this.prisma.$disconnect();
      return likes;
    } catch (error) {
      console.error(error);
    }
  }
}

export const db = new DBConnection();
