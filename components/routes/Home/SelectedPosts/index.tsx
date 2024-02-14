import { Post } from './Post';
import type { PostType } from '@/lib/types';
import { getPosts } from '@/sanity/lib/client';
import { postListSchema } from '@/lib/schema';

export async function SelectedPosts() {
  const posts = postListSchema.safeParse(await getPosts(0, 3, 'desc'));

  return (
    <div className="border-t-2 border-primary">
      {'error' in posts
        ? null
        : posts.data.map((post: PostType, _idx: number) => (
            <Post
              key={post.id}
              {...post}
              animationDelay={_idx * 0.5}
            />
          ))}
    </div>
  );
}
