'use server';
import { recaptchaSchema } from '@/lib/schema';
import { contactSchema } from '@/lib/schema';
import { Inputs } from '@/lib/types';

export async function send(data: Inputs) {
	const result = contactSchema.safeParse(data);

	if ('error' in result) {
		console.error(result.error.issues);
		return {
			error: {
				message: 'Error: Invalid input',
			},
		};
	}

	try {
		const res = await fetch('https://formspree.io/f/xpzvlggy', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		const json = await res.json();

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

export async function verify(token: string) {
	const secret = process.env.RECAPTCHA_SECRET_KEY;
	const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
		},
	});
	const json = await response.json();

	const result = recaptchaSchema.safeParse(json);

	if (!result.success) {
		console.error(result.error.issues);
		return {
			...json,
			error: new Error('Failed to verify recaptcha token'),
		};
	}

	if (json.score < 0.5) {
		return {
			...json,
			success: false,
			error: new Error(`Recaptcha score too low: ${json.score}`),
		};
	}

	return json;
}
