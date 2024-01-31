import { Post } from "./Post";
import { cn } from "@/lib/utils";
import { type PostType } from "@/lib/types";

type PostsProps = {
  posts: PostType[];
};

export function Posts({
  posts,
  className,
}: PostsProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        className,
        "my-20 inline-flex flex-wrap gap-5 xl:mb-[260px]",
      )}
    >
      {posts.map((post, idx) => (
        <Post
          key={post.slug}
          number={idx + 1}
          {...post}
        />
      ))}
    </div>
  );
}
