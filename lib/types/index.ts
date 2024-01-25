import { SentMessageInfo } from "nodemailer/lib/smtp-transport";
export type Inputs = {
  name: string;
  email: string;
  message: string;
  [key: string]: {};
};

export type InputsFocusState = {
  name: boolean;
  email: boolean;
  message: boolean;
  [key: string]: boolean;
};

export type SentMessageType = SentMessageInfo & { error?: { message: string } };

export type RecaptchaType = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  "error-codes"?: string[];
  error?: Error;
};

export type PostType = {
  title: string;
  publishedAt: string;
  media: string;
  excerpt: string;
  readingTime: number;
  slug: string;
  author: AuthorType;
};

export type AuthorType = {
  name: string;
  image: string;
  bio?: string;
  twitter?: string;
};
