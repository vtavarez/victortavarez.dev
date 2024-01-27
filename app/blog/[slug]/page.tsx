import { notFound } from "next/navigation";
import { getPost } from "@/sanity/lib/client";
import { postSchema } from "@/lib/utils";

type PostParams = {
  slug: string;
};

export default async function Post({ params }: { params: PostParams }) {
  const post = postSchema.safeParse(await getPost(params.slug));

  if (!post.success) {
    console.error(post.error.issues);
    return notFound();
  }

  return <div>{post.data.title}</div>;
}
