import { revalidateTag } from 'next/cache';
export async function POST(request: Request) {
	revalidateTag('work');
	return new Response('OK');
}
