"use client";
import { useState } from "react";
import { getPostsChunk } from "@/actions/getPostsChunk";
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

type Chunk = {
  from: number;
  to: number;
  currentChunk: number;
  currentPosts: PostType[];
};

export function Posts({
  totalPosts,
  posts,
  className,
}: PostsProps & React.HTMLAttributes<HTMLDivElement>) {
  const [{ from, to, currentChunk, currentPosts }, setChunk] = useState<Chunk>({
    from: 0,
    to: 8,
    currentChunk: 1,
    currentPosts: posts,
  });
  const totalChunks = Math.ceil(totalPosts / 8);

  const animation = {
    initial: { x: "100%" },
    whileInView: { x: "0%" },
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.8,
    },
  };

  async function fetchPosts() {
    const posts = await getPostsChunk(from + 8, to + 8, "desc");

    if (posts) {
      setChunk({
        from: from + 8,
        to: to + 8,
        currentChunk: 1,
        currentPosts: posts,
      });
    }
  }

  return (
    <div className={cn(className, "relative min-h-[85lvh] bg-background")}>
      <EyebrowText cta="Thoughts">Explore</EyebrowText>
      <motion.div
        className="inline-flex flex-wrap gap-5 pt-6"
        {...animation}
      >
        {currentPosts.map((post, idx) => (
          <Post
            key={post.id}
            number={idx + 1}
            {...post}
          />
        ))}
      </motion.div>
      <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center">
        <PostsPagination
          currentChunk={currentChunk}
          totalChunks={totalChunks}
          setChunk={() => {}}
        />
      </div>
    </div>
  );
}
