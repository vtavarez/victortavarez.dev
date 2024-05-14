'use server';
import { createTransport } from 'nodemailer';
import { recaptchaSchema } from '@/lib/schema';
import { contactSchema, contactResponseSchema } from '@/lib/schema';
import { Inputs } from '@/lib/types';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const options: SMTPTransport.Options = {
	host: process.env.SES_EMAIL_HOST,
	port: 587,
	secure: false,
	auth: {
		user: process.env.SES_EMAIL_USER,
		pass: process.env.SES_EMAIL_PASS,
	},
};

const transporter = createTransport(options);

export async function verify(token: string) {
	const url = `${process.env.RECAPTCHA_URL}?key=${process.env.RECAPTCHA_SECRET_KEY}`;
	const request = {
		event: {
			token,
			expectedAction: 'SUBMIT_CONTACT_FORM',
			siteKey: process.env.RECAPTCHA_SITE_KEY,
		},
	};

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(request),
		});

		const data = await response.json();

		const validationResults = recaptchaSchema.safeParse(data);

		if (!validationResults.success) {
			console.error(validationResults.error.issues);
			return {
				...data,
				success: false,
				error: 'Failed to verify recaptcha token',
			};
		}

		if (data.riskAnalysis.score < 0.5) {
			return {
				...data,
				success: false,
				error: `Recaptcha score too low: ${data.riskAnalysis.score}`,
			};
		}

		return {
			...data,
			success: true,
		};
	} catch (err) {
		console.error(err);
		return {
			error: 'Failed to verify recaptcha token',
		};
	}
}

export async function send(data: Inputs) {
	const validationResults = contactSchema.safeParse(data);

	if (!validationResults.success) {
		console.error(validationResults.error.issues);
		return {
			error: {
				message: 'Error: Invalid input',
			},
		};
	}

	try {
		const response = await transporter.sendMail({
			from: process.env.SES_EMAIL_FROM,
			to: process.env.SES_EMAIL_TO,
			subject: 'New message from victortavarez.dev',
			html: `
				<p><strong>Name:</strong> ${data.name}</p>
				<p><strong>Email:</strong> ${data.email}</p>
				<p><strong>Message:</strong> ${data.message}</p>
			`,
		});

		const validationResults = contactResponseSchema.safeParse(response);

		if (!validationResults.success) {
			console.error(validationResults.error.issues);
			return {
				error: {
					message: 'Response validation failed',
					issues: validationResults.error.issues,
				},
			};
		}

		return {
			...response,
			success: true,
		};
	} catch (err) {
		console.error(err);
		return {
			error: {
				message: 'Error sending email',
			},
		};
	}
}
