'use client';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/Menu';
import { ModeToggle } from '@/components/ui/Buttons';
import { cn } from '@/lib/utils';
import navigation_links from '@/lib/data/navigation_links.json';

export function Navigation() {
	return (
		<div className={cn('-mx-2 flex flex-row items-center py-2 xl:py-3')}>
			<h2 className="mr-auto pl-2 text-sm font-medium leading-none tracking-tighter text-primary lg:text-base">
				<Link href="/">Victor.</Link>
			</h2>
			<div className="mx-auto hidden text-base font-medium leading-none tracking-tighter text-primary md:block">
				Web Developer
			</div>
			<div className="ml-auto">
				<NavigationMenu className="mr-2 sm:mr-[8rem]">
					<NavigationMenuList>
						{navigation_links.map(
							({
								id,
								title,
								href,
							}: {
								id: number;
								title: string;
								href: string;
							}) => (
								<NavigationMenuItem key={id}>
									<Link
										href={href}
										legacyBehavior
										passHref
									>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											{title}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							),
						)}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<ModeToggle />
		</div>
	);
}
