import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
export async function POST(request: NextRequest) {
	try {
		revalidateTag('studies');
		return NextResponse.json(
			{ message: 'Case studies cache revalidated' },
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'Error revalidating case studies cache' },
			{ status: 500 },
		);
	}
}
