'use server';
import { createTransport } from 'nodemailer';
import { SES } from '@aws-sdk/client-ses';
import { recaptchaSchema } from '@/lib/schema';
import { contactSchema } from '@/lib/schema';
import { Inputs } from '@/lib/types';

const ses = new SES({ apiVersion: '2010-12-01', region: 'us-east-1' });

const email = createTransport({
	SES: {},
});

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
		const response = await fetch('https://formspree.io/f/xpzvlggy', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		const json = await response.json();

		if ('errors' in json) {
			throw new Error(json.errors);
		}

		return json;
	} catch (err) {
		console.error(err);
		return {
			error: {
				message: 'Error sending email',
			},
		};
	}
}
