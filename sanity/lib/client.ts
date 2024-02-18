import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';
import { PostType } from '@/lib/types';

const nodes = `
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

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
});

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
	const postsArray = await client.fetch(
		`*[_type == "post"][${start}..${limit}] | order(publishedAt ${order}){${nodes}}`,
		{},
		{ cache: 'force-cache', next: { tags: ['posts'] } },
	);
	return postsArray;
}

export async function getPost(slug: string): Promise<PostType> {
	const postsArray = await client.fetch(
		`*[slug.current == "${slug}"]{${nodes} body}`,
		{},
		{ cache: 'force-cache', next: { tags: ['post'] } },
	);
	return extractPost(postsArray);
}

export async function getWork(slug: string, order: string): Promise<PostType> {
	const postsArray = await client.fetch(
		`*[_type == "work"] order(publishedAt ${order}){${nodes} body}`,
		{},
		{ cache: 'force-cache', next: { tags: ['work'] } },
	);
	return extractPost(postsArray);
}
