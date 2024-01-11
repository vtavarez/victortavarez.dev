"use server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export async function send(data: Inputs) {
  const { name, email, message } = data;
  const options: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name} (${email})`,
    text: message,
  };

  const mail = () => {
    return new Promise<string>((resolve, reject) => {
      transporter.sendMail(options, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve("Email sent: " + info.response);
        }
      });
    });
  };

  try {
    return await mail();
  } catch (error: any) {
    throw new Error(error);
  }
}
