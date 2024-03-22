import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
export async function POST(request: NextRequest) {
	try {
		revalidateTag('posts');
		return NextResponse.json(
			{ message: 'Posts cache revalidated' },
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'Error revalidating posts cache' },
			{ status: 500 },
		);
	}
}
