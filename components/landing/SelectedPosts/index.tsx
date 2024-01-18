import { Post } from "@/components/theme";
import type { PostType } from "@/lib/types";
import { client } from "@/sanity/lib/client";

export async function SelectedPosts() {
  const posts = await client.fetch(
    `*[_type == "post"]{ title, excerpt, reading_time, "slug":slug.current, "author": author->{"image":image.asset->url,name}, "media": mainImage.asset->url }`,
  );

  return (
    <>
      <div className="border-b-1 border-primary">
        {posts.map(
          ({ title, media, excerpt, reading_time, slug, author }: PostType) => (
            <Post
              key={title}
              title={title}
              media={media}
              slug={slug}
              excerpt={excerpt}
              reading_time={reading_time}
              author={author}
            />
          ),
        )}
      </div>
    </>
  );
}
