import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
export async function POST(request: NextRequest) {
	try {
		revalidateTag('posts');
		return NextResponse.json({ message: 'Posts revalidated' }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'Error revalidating posts' },
			{ status: 500 },
		);
	}
}
