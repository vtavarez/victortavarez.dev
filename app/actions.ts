'use server';
import { createTransport } from 'nodemailer';
import { recaptchaSchema } from '@/lib/schema';
import { contactSchema, contactResponseSchema } from '@/lib/schema';
import { Inputs } from '@/lib/types';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const options: SMTPTransport.Options = {
	host: process.env.EMAIL_HOST,
	port: 587,
	secure: false,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
};

const transporter = createTransport(options);

export async function verify(token: string) {
	const url = `https://recaptchaenterprise.googleapis.com/v1/projects/victortavarez-dev/assessments?key=${process.env.RECAPTCHA_SECRET_KEY}`;
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

		if ('error' in validationResults) {
			console.error(validationResults.error.issues);
			return {
				...data,
				error: new Error('Failed to verify recaptcha token'),
			};
		}

		if (data.riskAnalysis.score < 0.5) {
			return {
				...data,
				success: false,
				error: new Error(`Recaptcha score too low: ${data.riskAnalysis.score}`),
			};
		}

		return {
			...data,
			success: true,
		};
	} catch (err) {
		console.error(err);
		return {
			error: new Error('Failed to verify recaptcha token'),
		};
	}
}

export async function send(data: Inputs) {
	const validationResults = contactSchema.safeParse(data);

	if ('error' in validationResults) {
		console.error(validationResults.error.issues);
		return {
			error: {
				message: 'Error: Invalid input',
			},
		};
	}

	try {
		const response = await transporter.sendMail({
			from: process.env.EMAIL_FROM,
			to: process.env.EMAIL_TO,
			subject: 'New message from victortavarez.dev',
			html: `
				<p><strong>Name:</strong> ${data.name}</p>
				<p><strong>Email:</strong> ${data.email}</p>
				<p><strong>Message:</strong> ${data.message}</p>
			`,
		});

		const validationResults = contactResponseSchema.safeParse(response);

		if ('error' in validationResults) {
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
