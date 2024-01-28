import { Metadata } from "next";
import type { PostType } from "@/lib/types";
import { getPosts } from "@/sanity/lib/client";
import { postListSchema } from "@/lib/utils";
import { EyebrowText } from "@/components/theme";

export const metadata: Metadata = {
  title: "Blog - Victor Tavarez",
  description:
    "Thoughts on the current state of web development, and experiences and the lessons I've learned along the way.",
};

export default async function Blog() {
  const posts = postListSchema.safeParse(await getPosts(4, "desc"));

  return (
    <main>
      <EyebrowText cta="Explore">Thoughts</EyebrowText>
    </main>
  );
}
