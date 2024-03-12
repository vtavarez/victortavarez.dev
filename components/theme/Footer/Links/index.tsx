import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import links from '@/lib/data/navigation_links.json';

export function Links() {
	return (
		<div className="mt-6 flex h-fit w-full flex-row justify-between px-6 text-sm font-medium xl:px-8 xl:text-base">
			<div className="flex flex-col items-center justify-center">
				<ul className="flex flex-row flex-wrap items-center justify-between gap-4">
					{links.map(({ id, title, href }) => (
						<li key={id}>
							<Link href={href}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-row items-center justify-center gap-4">
				Top <ArrowUp className="size-eyebrow-icon" />
			</div>
		</div>
	);
}
