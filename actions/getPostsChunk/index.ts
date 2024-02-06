"use server";
import { getPosts } from "@/sanity/lib/client";
import { postListSchema } from "@/lib/schema";

export async function getPostsChunk(from: number, to: number, order: string) {
  const posts = postListSchema.safeParse(getPosts(from, to, order));

  if ("error" in posts) {
    console.error(posts.error.issues);
    return null;
  }

  return posts.data;
}
