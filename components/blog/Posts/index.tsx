"use client";
import { Post } from "./Post";
import { EyebrowText } from "@/components/theme";
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
    initial: { x: "100%" },
    whileInView: { x: "0%" },
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.8,
    },
  };
  return (
    <div className={cn(className, "min-h-[85lvh] bg-background")}>
      <EyebrowText cta="Thoughts">Explore</EyebrowText>
      <motion.div
        className="inline-flex flex-wrap gap-5 pt-12"
        {...animation}
      >
        {posts.map((post, idx) => (
          <Post
            key={post._id}
            number={idx + 1}
            {...post}
          />
        ))}
      </motion.div>
    </div>
  );
}
