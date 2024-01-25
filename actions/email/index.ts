"use server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { contactSchema } from "@/lib/utils";
import { Inputs } from "@/lib/types";

export async function send(data: Inputs) {
  const { name, email, message } = data;
  contactSchema.parse(data);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const options: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name} (${email})`,
    text: message,
  };

  const res = await transporter.sendMail(options);

  if (res.rejected.length) {
    return {
      ...res,
      error: {
        message: "Error sending email",
      },
    };
  }

  return await transporter.sendMail(options);
}
