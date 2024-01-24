import { Post } from "@/components/theme";
import type { PostType } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { postListSchema } from "@/lib/utils";

export async function SelectedPosts() {
  const posts = postListSchema.parse(
    await client.fetch(
      `*[_type == "post"][0..3] | order(publishedAt desc){ title, publishedAt, excerpt, "readingTime":reading_time, "slug":slug.current, "author": author->{"image":image.asset->url,name}, "media": mainImage.asset->url }`,
      {},
      {
        cache: "force-cache",
        next: { tags: ["posts"] },
      },
    ),
  );

  return (
    <div className="border-b-1 border-primary">
      {posts.map((post: PostType, _idx: number) => (
        <Post
          key={post.title}
          {...post}
          animationDelay={_idx * 0.5}
        />
      ))}
    </div>
  );
}
