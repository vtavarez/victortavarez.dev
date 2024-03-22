import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
export async function POST(request: NextRequest) {
	try {
		revalidateTag('projects');
		return NextResponse.json(
			{ message: 'Projects cache revalidated' },
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'Error revalidating projects cache' },
			{ status: 500 },
		);
	}
}
