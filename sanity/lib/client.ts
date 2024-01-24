import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import { PostType } from "@/lib/types";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getPosts<Object>({ limit = 3 }): Promise<PostType[]> {
  const posts = await client.fetch(
    `*[_type == "post"][0..${limit}] | order(publishedAt desc){ title, publishedAt, excerpt, "readingTime":reading_time, "slug":slug.current, "author": author->{"image":image.asset->url,name}, "media": mainImage.asset->url }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["posts"] },
    },
  );

  return posts;
}
