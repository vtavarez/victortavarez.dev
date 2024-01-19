import { SentMessageInfo } from "nodemailer";
import { DateTimeInputProps } from "sanity";

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

export type SentMessageType = SentMessageInfo;

export type RecaptchaType = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  "error-codes": string[];
  error?: Error;
};

export type PostType = {
  title: string;
  publishedAt: string;
  media: string;
  excerpt: string;
  readingTime: string;
  slug: string;
  author: AuthorType;
};

export type AuthorType = {
  name: string;
  image: string;
  bio?: string;
  twitter?: string;
};
