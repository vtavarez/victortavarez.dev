import { Metadata } from 'next';
import { getPostsCount, getPosts } from '@/sanity/lib/client';
import { postListSchema } from '@/lib/schema';
import { Heading } from '@/components/theme';
import { Posts } from '@/components/routes/Blog';

export const metadata: Metadata = {
  title: 'Blog - Victor Tavarez',
  description:
    "Thoughts on the current state of web development, and experiences and the lessons I've learned along the way.",
};

export default async function Page() {
  const totalPosts = await getPostsCount();
  const posts = postListSchema.safeParse(await getPosts(0, 8, 'desc'));

  const props = {
    totalPosts,
    posts: 'error' in posts ? (console.error(posts.error), []) : posts.data,
  };

  return (
    <>
      <div className="relative pt-[100lvh]">
        <Heading
          className="fixed inset-0 -z-10 flex h-[100lvh] items-end overflow-hidden px-6 pb-12 sm:pb-28 xl:px-8"
          icon
        >
          Blog
        </Heading>
        <Posts {...props} />
      </div>
    </>
  );
}
