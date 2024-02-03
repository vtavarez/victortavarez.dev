import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import { PostType } from "@/lib/types";

const nodes = `
   _id,
  title,
  publishedAt,
  excerpt,
  timeToRead,
  "slug":slug.current,
  "author": author->{"image":image.asset->url,name},
  "mainImage": {"url":mainImage.asset->url, "alt":mainImage.alt},
`;

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

function extractPost(res: Array<PostType>): PostType {
  return res[0];
}

export async function getPosts(
  start: number = 0,
  limit: number = 3,
  order: string = "desc",
): Promise<PostType[]> {
  const postsArray = await client.fetch(
    `*[_type == "post"][${start}..${limit}] | order(publishedAt ${order}){${nodes}}`,
    {},
    { cache: "force-cache", next: { tags: ["posts"] } },
  );
  return postsArray;
}

export async function getPost(slug: string): Promise<PostType> {
  const postsArray = await client.fetch(
    `*[slug.current == "${slug}"]{${nodes} body}`,
    {},
    { cache: "force-cache", next: { tags: ["post"] } },
  );
  return extractPost(postsArray);
}
