"use client";
import { Post } from "./Post";
import { PostsPagination } from "./Pagination";
import { EyebrowText } from "@/components/theme";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type PostType } from "@/lib/types";

type PostsProps = {
  totalPosts: number;
  posts: PostType[];
};

export function Posts({
  totalPosts,
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
    <div className={cn(className, "relative min-h-[85lvh] bg-background")}>
      <EyebrowText cta="Thoughts">Explore</EyebrowText>
      <motion.div
        className="inline-flex flex-wrap gap-5 pt-6"
        {...animation}
      >
        {posts.map((post, idx) => (
          <Post
            key={post.id}
            number={idx + 1}
            {...post}
          />
        ))}
      </motion.div>
      <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center">
        <PostsPagination
          currentPage={1}
          total={totalPosts}
        />
      </div>
    </div>
  );
}
