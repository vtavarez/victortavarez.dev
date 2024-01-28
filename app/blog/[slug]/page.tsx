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

  if (!post.success) {
    return {
      title: "404 Not Found - Victor Tavarez",
      description: "This post could not be found.",
    };
  }

  return {
    title: post.data.title + " - Victor Tavarez",
    description: post.data.excerpt,
  };
}

export default async function Post({ params }: PostProps) {
  const post = postSchema.safeParse(await getPost(params.slug));

  if (!post.success) {
    console.error(post.error.issues);
    return notFound();
  }

  return <h1>{post.data.title}</h1>;
}
