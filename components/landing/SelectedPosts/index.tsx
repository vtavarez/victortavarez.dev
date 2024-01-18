import { Post } from "@/components/theme";
import type { PostType } from "@/lib/types";
import { client } from "@/sanity/lib/client";

export async function SelectedPosts() {
  const posts = await client.fetch(
    `*[_type == "post"]{ title, excerpt, reading_time, "author": author->{"image":image.asset->url,name}, "media": mainImage.asset->url }`,
  );

  return (
    <>
      <div className="bg-background">
        {posts.map(
          ({ title, media, excerpt, reading_time, author }: PostType) => (
            <Post
              key={title}
              title={title}
              media={media}
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
