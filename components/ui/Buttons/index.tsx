'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { cn } from '@/lib/utils';

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
				>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="border-2 bg-background shadow-project"
			>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function ContactButton({ children }: { children: React.ReactNode }) {
	const animation = {
		initial: {
			y: 10,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
		},
		transition: {
			type: 'spring',
			duration: 0.5,
			damping: 10,
			stiffness: 100,
			delay: 1,
		},
	};

	const shadowAnimation = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			type: 'spring',
			duration: 0.1,
			damping: 10,
			stiffness: 100,
			delay: 0.85,
		},
	};

	return (
		<motion.div
			layout
			className="relative mt-4 w-fit "
			{...animation}
		>
			<Button
				asChild
				variant="contact"
			>
				<Link href="#contact">
					{children}{' '}
					<span
						aria-hidden="true"
						className="ml-2"
					>
						<ArrowRight />
					</span>
				</Link>
			</Button>
			<motion.div
				className="absolute inset-0 -z-10 shadow-project"
				{...shadowAnimation}
			/>
		</motion.div>
	);
}

export function SubmitButton({
	children,
	className,
	...props
}: {
	className?: string;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<Button
			className={cn('w-full', className)}
			size="lg"
			type="submit"
			{...props}
		>
			{children}
		</Button>
	);
}

export function ReadMore({
	href,
	children,
	...props
}: {
	href: string;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<Button
			asChild
			variant="secondary"
			{...props}
		>
			<Link href={href}>
				{children}
				<span
					aria-hidden="true"
					className="ml-2"
				>
					<ArrowUpRight />
				</span>
			</Link>
		</Button>
	);
}
