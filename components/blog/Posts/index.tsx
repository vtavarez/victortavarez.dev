import { Post } from "./Post";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type PostType } from "@/lib/types";

type PostsProps = {
  posts: PostType[];
};

export function Posts({
  posts,
  ...props
}: PostsProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(props.className, "flex flex-row gap-4")}>
      {posts.map((post) => (
        <Post
          key={post.slug}
          {...post}
        />
      ))}
    </div>
  );
}
