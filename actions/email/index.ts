'use server';
import { contactSchema } from '@/lib/schema';
import { Inputs } from '@/lib/types';

export async function send(data: Inputs) {
	contactSchema.parse(data);

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
