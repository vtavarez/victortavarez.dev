'use client';
import { useState } from 'react';
import { getPostsChunk } from '@/actions/get-posts-chunk';
import { Post } from './Post';
import { PostsPagination } from './Pagination';
import { EyebrowText } from '@/components/theme';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type PostType } from '@/lib/types';

type PostsProps = {
  totalPosts: number;
  posts: PostType[];
};

type PostsChunk = {
  from: number;
  to: number;
  currentChunk: number;
  currentPosts: PostType[];
};

const animation = {
  initial: { x: '100%' },
  whileInView: { x: '0%' },
  transition: {
    type: 'tween',
    ease: 'linear',
    duration: 0.8,
  },
};

export function Posts({
  totalPosts,
  posts,
  className,
}: PostsProps & React.HTMLAttributes<HTMLDivElement>) {
  const [{ from, to, currentChunk, currentPosts }, setChunk] =
    useState<PostsChunk>({
      from: 0,
      to: 8,
      currentChunk: 1,
      currentPosts: posts,
    });

  const totalChunks = Math.ceil(totalPosts / 8);

  async function requestChunk(requestedChunk: number) {
    const response =
      requestedChunk > currentChunk
        ? await getPostsChunk(from + 8, to + 8)
        : await getPostsChunk(from - 8, to - 8);

    'error' in response ? console.error(response.error) : setChunk(response);
  }

  return (
    <div className={cn(className, 'h-[100lvh] bg-background')}>
      <EyebrowText cta="Thoughts">Explore</EyebrowText>
      <div className="flex min-h-[85%] flex-col justify-between">
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
        <div className="mb-4 flex items-center justify-center">
          <PostsPagination
            currentChunk={currentChunk}
            totalChunks={totalChunks}
            requestedChunk={chunk => requestChunk(chunk)}
          />
        </div>
      </div>
    </div>
  );
}
