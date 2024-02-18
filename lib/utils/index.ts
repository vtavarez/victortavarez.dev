import { PrismaClient } from '@prisma/client';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { type ClassValue, clsx } from 'clsx';

// Tailwind CSS Classnames Merging Utility

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Date Formatting

const dateFormat = 'MMMM dd, yyyy';

export function formatDate(date: Date | string) {
	return format(new Date(date), dateFormat);
}

// Typewriter Animation

export function* typeWriter(text: string) {
	for (let char of text) {
		yield char;
	}
}

// Prisma Client

class DBConnection {
	private readonly client: PrismaClient;

	constructor(client: typeof PrismaClient) {
		this.client = new client();
	}

	private async disconnect() {
		await this.client.$disconnect();
	}

	async create(data: { id: string; likes: number }) {
		try {
			const likes = await this.client.postLikes.create({ data });
			await this.disconnect();
			return likes;
		} catch (error) {
			console.error(error);
		}
	}

	async update(data: { id: string; likes: number }) {
		try {
			const likes = await this.client.postLikes.update({
				where: { id: data.id },
				data: { likes: data.likes },
			});
			await this.disconnect();
			return likes;
		} catch (error) {
			console.error(error);
		}
	}
}

// Fetching Data

function extractProjects(res: any): any[] {
	const {
		data: {
			viewer: { repositories },
		},
	} = res;
	return repositories.nodes;
}

export async function getProjects(
	number: number,
	direction: string,
): Promise<any[]> {
	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		cache: 'force-cache',
		next: { tags: ['projects'] },
		headers: {
			Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
				query {
					viewer {
						repositories(
							first: ${number}
							privacy: PUBLIC
							orderBy: { field: CREATED_AT, direction: ${direction} }
						) {
							nodes {
								name
								description
								url
								stargazerCount
								forkCount
							}
						}
					}
				}
			`,
		}),
	});
	return extractProjects(response.json());
}
