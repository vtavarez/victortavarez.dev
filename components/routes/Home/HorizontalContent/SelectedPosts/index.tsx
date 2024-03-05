import { getPosts } from '@/lib/utils';
import { Posts } from './Posts';
import { ContentItem } from '@/components/ui';
import { EyebrowText } from '@/components/theme';

export async function SelectedPosts() {
	const posts = await getPosts();

	return (
		<ContentItem>
			<div className="absolute pt-20 text-base font-medium leading-loose">
				/ 002
			</div>
			<div className="flex h-horizontal-content flex-col items-center justify-center pt-20">
				<Posts items={posts} />
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
