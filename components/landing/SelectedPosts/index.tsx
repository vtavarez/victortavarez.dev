import { Card } from "@/components/ui";
import type { Post } from "@/lib/types";
import { client } from "@/sanity/lib/client";

export async function SelectedPosts() {
  const posts = await client.fetch(
    `*[_type == "post"]{ title, excerpt, reading_time, "author": author->name, "media": mainImage.asset->url }`,
  );

  return (
    <div className="my-48 grid grid-cols-2 grid-rows-2">
      {posts.map(({ title, media, excerpt, reading_time, author }: Post) => (
        <Card
          key={title}
          title={title}
          media={media}
          excerpt={excerpt}
          reading_time={reading_time}
          author={author}
        />
      ))}
    </div>
  );
}
