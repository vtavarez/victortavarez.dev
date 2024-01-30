import { Post } from "./Post";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type PostType } from "@/lib/types";
import { notFound } from "next/navigation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

type PostsProps = {
  posts: PostType[];
};

export function Posts({
  posts,
  ...props
}: PostsProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        props.className,
        "flex flex-row gap-6 xl:mt-[50%] xl:-translate-y-[50%]",
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
