import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import { PostType } from "@/lib/types";

const nodes = `{
  _id,
  title,
  publishedAt,
  excerpt,
  "readingTime":reading_time,
  "slug":slug.current,
  "author": author->{"image":image.asset->url,name},
  "media": mainImage.asset->url
  }`;

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
  limit: number = 3,
  order: string = "desc",
): Promise<PostType[]> {
  const postsArray = await client.fetch(
    `*[_type == "post"][0..${limit}] | order(publishedAt ${order})${nodes}`,
    {},
    { cache: "force-cache", next: { tags: ["posts"] } },
  );
  return postsArray;
}

export async function getPost(slug: string): Promise<PostType> {
  const postsArray = await client.fetch(
    `*[slug.current == "${slug}"]${nodes}`,
    {},
    { cache: "force-cache", next: { tags: ["post"] } },
  );
  return extractPost(postsArray);
}
