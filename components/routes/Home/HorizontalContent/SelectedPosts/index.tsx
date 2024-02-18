import { getPosts } from '@/sanity/lib/client';
import { postListSchema } from '@/lib/schema';
import { ContentItem } from '@/components/ui';
import { EyebrowText, Posts } from '@/components/theme';

export async function SelectedPosts() {
	const posts = postListSchema.safeParse(await getPosts(0, 3, 'desc'));

	return (
		<ContentItem>
			<div className="absolute pt-20 text-base font-medium leading-loose">
				/ 002
			</div>
			<div className="flex h-horizontal-content flex-col items-center justify-center pt-20">
				{'error' in posts ? null : <Posts items={posts.data} />}
			</div>
			<EyebrowText
				cta="Recent projects"
				icon="arrow-down"
			>
				Explore
			</EyebrowText>
		</ContentItem>
	);
}
