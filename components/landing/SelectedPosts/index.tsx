import { Post } from "@/components/theme";
import type { PostType } from "@/lib/types";
import { getPosts } from "@/sanity/lib/client";
import { postListSchema } from "@/lib/utils";

export async function SelectedPosts() {
  const posts = await postListSchema.parse(getPosts({ limit: 3 }));

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
