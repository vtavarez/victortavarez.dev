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
    <>
      <EyebrowText cta="Thoughts">Explore</EyebrowText>
      <div className="flex flex-col justify-end xl:mb-[460px] xl:h-lvh">
        <h1 className="py-8 text-3xl font-medium text-primary xl:mt-[260px] xl:py-16">
          Blog
        </h1>
        <Posts {...props} />
      </div>
    </>
  );
}
