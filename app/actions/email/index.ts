'use server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { contactSchema } from '@/lib/schema';
import { Inputs } from '@/lib/types';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export async function send(data: Inputs) {
	const { name, email, message } = data;
	contactSchema.parse(data);

	const options: Mail.Options = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: `New message from ${name} (${email})`,
		text: message,
	};

	const res = await transporter.sendMail(options);

	if ('err' in res) {
		console.error(res.err);
		return {
			error: {
				message: 'Error sending email',
			},
		};
	}

	return res;
}
