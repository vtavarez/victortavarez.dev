"use client";
import { Post } from "./Post";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type PostType } from "@/lib/types";

type PostsProps = {
  posts: PostType[];
};

export function Posts({
  posts,
  className,
}: PostsProps & React.HTMLAttributes<HTMLDivElement>) {
  const animation = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.4,
    },
  };
  return (
    <motion.div
      className={cn(
        className,
        "my-20 inline-flex flex-wrap gap-5 xl:mb-[260px]",
      )}
    >
      {posts.map((post, idx) => (
        <Post
          key={post._id}
          number={idx + 1}
          {...post}
        />
      ))}
    </motion.div>
  );
}
