import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
export async function POST(request: NextRequest) {
	try {
		revalidateTag('projects');
		return new Response('OK');
	} catch (error) {
		console.error(error);
		return new Response('Error');
	}
}
