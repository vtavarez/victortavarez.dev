"use server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export async function send(data: Inputs) {
  const { name, email, message } = data;
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

  const mail = await transporter.sendMail(options);

  try {
    return mail;
  } catch (error: any) {
    return new Error(error);
  }
}
