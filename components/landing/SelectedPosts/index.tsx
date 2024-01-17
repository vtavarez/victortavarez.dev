import { Post, Headline } from "@/components/theme";
import type { Post as PostType } from "@/lib/types";
import { client } from "@/sanity/lib/client";

export async function SelectedPosts() {
  const posts = await client.fetch(
    `*[_type == "post"]{ title, excerpt, reading_time, "author": author->name, "media": mainImage.asset->url }`,
  );

  return (
    <div className="my-36">
      <Headline>(Selected Posts)</Headline>
      <div className="bg-background">
        {/* {posts.map(
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
        )} */}
        <Post
          key={posts[0].title}
          title={posts[0].title}
          media={posts[0].media}
          excerpt={posts[0].excerpt}
          reading_time={posts[0].reading_time}
          author={posts[0].author}
        />
        <Post
          key={posts[0].title}
          title={posts[0].title}
          media={posts[0].media}
          excerpt={posts[0].excerpt}
          reading_time={posts[0].reading_time}
          author={posts[0].author}
        />
        <Post
          key={posts[0].title}
          title={posts[0].title}
          media={posts[0].media}
          excerpt={posts[0].excerpt}
          reading_time={posts[0].reading_time}
          author={posts[0].author}
        />
      </div>
    </div>
  );
}
