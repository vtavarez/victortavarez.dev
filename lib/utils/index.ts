import { client } from '@/sanity/lib/client';
import { PrismaClient } from '@prisma/client';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { type ClassValue, clsx } from 'clsx';
import { postListSchema, projectsResponseSchema } from '@/lib/schema';
import { type ProjectsData, ProjectsResponse, PostType } from '@/lib/types';
import post from '@/sanity/schemas/post';

// Tailwind CSS Classnames Merging Utility

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Date Formatting Utility

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

// Prisma Client Helper Class

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

// Fetch Helper Functions

const postNodes = `
  'id':_id,
  title,
  publishedAt,
  excerpt,
  timeToRead,
  'slug':slug.current,
  'categories':categories[]->title,
  'author':{'image':author->image.asset->url,'name':author->name},
  'mainImage': {'url':mainImage.asset->url, 'alt':mainImage.alt},
`;

const workNodes = ``;

function extractPost(res: PostType[]): PostType {
	return res[0];
}

export async function getPostsCount(): Promise<number> {
	const count = await client.fetch(
		`count(*[_type == "post"])`,
		{},
		{ cache: 'force-cache', next: { tags: ['posts'] } },
	);
	return count;
}

export async function getPosts(
	start: number = 0,
	limit: number = 3,
	order: string = 'desc',
): Promise<PostType[]> {
	const response = await client.fetch(
		`*[_type == "post"][${start}..${limit}] | order(publishedAt ${order}){${postNodes}}`,
		{},
		{ cache: 'force-cache', next: { tags: ['posts'] } },
	);

	const result = postListSchema.safeParse(response);

	if ('error' in result) {
		console.error(result.error.issues);
		return [];
	}

	return result.data;
}

export async function getPost(
	slug: string,
): Promise<PostType | { error: string }> {
	const response = await client.fetch(
		`*[slug.current == "${slug}"]{${postNodes} body}`,
		{},
		{ cache: 'force-cache', next: { tags: ['post'] } },
	);

	const result = postListSchema.safeParse(response);

	if ('error' in result) {
		console.error(result.error.issues);
		return {
			error: `Error: ${result.error.issues}`,
		};
	}

	return extractPost(result.data);
}

export async function getWork(slug: string, order: string): Promise<PostType> {
	const postsArray = await client.fetch(
		`*[_type == "work"] order(publishedAt ${order}){${workNodes} body}`,
		{},
		{ cache: 'force-cache', next: { tags: ['work'] } },
	);
	return extractPost(postsArray);
}

function extractProjects(res: ProjectsResponse): ProjectsData {
	const {
		data: {
			viewer: { repositories },
		},
	} = res;
	return {
		projects: repositories.nodes,
	};
}

export async function getProjects(
	number: number,
	direction: string,
): Promise<ProjectsData> {
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
							orderBy: { field: CREATED_AT, direction: ${direction.toUpperCase()} }
						) {
							nodes {
								name
								description
								url
								stargazerCount
								forkCount
								primaryLanguage {
									name
								}
							}
						}
					}
				}
			`,
		}),
	});

	const result = projectsResponseSchema.safeParse(await response.json());

	if ('error' in result) {
		console.error(result.error.issues);
		return {
			error: `Error: ${result.error.issues}`,
			projects: [],
		};
	}

	return extractProjects(result.data);
}
