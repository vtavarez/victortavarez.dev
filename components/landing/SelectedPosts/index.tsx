import { Post } from "@/components/theme";
import type { PostType } from "@/lib/types";
import { client } from "@/sanity/lib/client";

export async function SelectedPosts() {
  const posts = await client.fetch(
    `*[_type == "post"][0..3] | order(publishedAt desc){ title, publishedAt, excerpt, "readingTime":reading_time, "slug":slug.current, "author": author->{"image":image.asset->url,name}, "media": mainImage.asset->url }`,
  );

  return (
    <div className="border-b-1 border-primary">
      {posts.map(
        (
          {
            title,
            publishedAt,
            media,
            excerpt,
            readingTime,
            slug,
            author,
          }: PostType,
          _idx: number,
        ) => (
          <Post
            key={title}
            title={title}
            publishedAt={publishedAt}
            media={media}
            slug={slug}
            excerpt={excerpt}
            readingTime={readingTime}
            author={author}
            animationDelay={_idx * 0.5}
          />
        ),
      )}
    </div>
  );
}
