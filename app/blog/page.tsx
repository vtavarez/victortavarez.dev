import { Metadata } from "next";
import { getPosts } from "@/sanity/lib/client";
import { postListSchema } from "@/lib/utils";
import { RouteAnimation, EyebrowText } from "@/components/theme";
import { Posts } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog - Victor Tavarez",
  description:
    "Thoughts on the current state of web development, and experiences and the lessons I've learned along the way.",
};

export default async function Blog() {
  const posts = postListSchema.safeParse(await getPosts(4, "desc"));

  const props = {
    posts: posts.success ? posts.data : [],
  };

  return (
    <RouteAnimation>
      <EyebrowText cta="Explore">Thoughts</EyebrowText>
      <Posts {...props} />
    </RouteAnimation>
  );
}
