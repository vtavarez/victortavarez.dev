"use server";
import { recaptchaSchema } from "@/lib/utils";

export async function verify(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  });
  const json = await response.json();

  recaptchaSchema.parse(json);

  if (!json.success) {
    return {
      ...json,
      error: new Error("Failed to verify recaptcha token"),
    };
  }

  if (json.score < 0.5) {
    return {
      ...json,
      succsess: false,
      error: new Error(`Recaptcha score too low: ${json.score}`),
    };
  }

  return json;
}
