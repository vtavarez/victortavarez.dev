import { PostPage } from "@/components/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost } from "@/sanity/lib/client";
import { postSchema } from "@/lib/utils";

type PostProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = postSchema.safeParse(await getPost(params.slug));

  return "error" in post
    ? {
        title: "404 Not Found - Victor Tavarez",
        description: "This post could not be found.",
      }
    : {
        title: post.data.title + " - Victor Tavarez",
        description: post.data.excerpt,
      };
}

export default async function Post({ params }: PostProps) {
  const post = postSchema.safeParse(await getPost(params.slug));

  return "error" in post ? (
    (console.error(post.error.issues), notFound())
  ) : (
    <PostPage {...post.data} />
  );
}
