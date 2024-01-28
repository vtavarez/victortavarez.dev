import { Post } from "./Post";
import type { PostType } from "@/lib/types";
import { getPosts } from "@/sanity/lib/client";
import { postListSchema } from "@/lib/utils";

export async function SelectedPosts() {
  const posts = postListSchema.safeParse(await getPosts(3, "desc"));

  if (!posts.success) {
    console.error(posts.error.issues);
    return null;
  }

  return (
    <div className="border-b-1 border-primary">
      {posts.data.map((post: PostType, _idx: number) => (
        <Post
          key={post.title}
          {...post}
          animationDelay={_idx * 0.5}
        />
      ))}
    </div>
  );
}
