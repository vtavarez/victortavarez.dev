import { SentMessageInfo } from "nodemailer";
/**
 * Represents the inputs for a form submission.
 */

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

export type SentMessage = SentMessageInfo;

export type RecaptchaResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  "error-codes": string[];
  error?: Error;
};
