"use server";
import { getPosts } from "@/sanity/lib/client";
import { postListSchema } from "@/lib/schema";

export async function getPostsChunk(from: number, to: number) {
  const response = postListSchema.safeParse(getPosts(from, to, "desc"));

  if ("error" in response) {
    console.error(response.error.issues);
    return {
      from,
      to,
      currentChunk: from / 8 + 1,
      currentPosts: [],
      error: response.error.issues,
    };
  }

  return {
    from: from + 8,
    to: to + 8,
    currentChunk: from / 8 + 1,
    currentPosts: response.data,
  };
}
