import { Heading } from '@/components/theme';

export function Hero() {
	return (
		<section className="fixed inset-0 -z-10 flex h-[100lvh] flex-col justify-end px-6 xl:px-8">
			<Heading
				className="pb-6 xl:pb-12"
				icon="arrow-down"
			>
				Hey, welcome.
			</Heading>
		</section>
	);
}
