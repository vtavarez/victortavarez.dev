import { ThemeProvider } from '@/lib/context/next-theme';
import { Header, Footer } from '@/components/theme';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Victor Tavarez',
	description:
		'Hey, welcome. Thanks for visiting my corner of the web. Here you will find a selection of my writing, and work.',
};

export default function RootLayout({
	children,
}: {
	header: React.ReactNode;
	children: React.ReactNode;
	footer: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning={true}
		>
			<body
				className={cn(
					'relative overflow-x-hidden bg-background px-6 pb-60 font-sans antialiased xl:min-h-screen xl:px-8 xl:pt-16',
					fontSans.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
