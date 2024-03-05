import { revalidateTag } from 'next/cache';
export async function POST(request: Request) {
	try {
		const response = await request.json();
		revalidateTag('posts');
		return new Response('OK');
	} catch (error) {
		console.error(error);
		return new Response('Error');
	}
}
