import { Intro } from './Intro';
import { SelectedPosts } from './SelectedPosts';
import { HorizontalContent as Content } from '@/components/ui';

export function HorizontalContent() {
	return (
		<Content>
			<Intro />
			<SelectedPosts />
		</Content>
	);
}
