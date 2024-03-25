import Image from 'next/image';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import tsx from 'refractor/lang/tsx';
import jsx from 'refractor/lang/jsx';
import { PortableTextComponents } from '@portabletext/react';
import '@/styles/refractor.css';

Refractor.registerLanguage(js);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(jsx);

export const Components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p className="mb-4">{children}</p>,
		h2: ({ children }) => <h2 className="mb-4 font-medium">{children}</h2>,
		h3: ({ children }) => <h3 className="mb-4 font-medium">{children}</h3>,
		h4: ({ children }) => <h4 className="mb-4 font-medium">{children}</h4>,
		blockquote: ({ children }) => (
			<blockquote className="mx-auto mb-8 border-l-4 border-primary pl-4">
				{children}
			</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className="mb-4 ml-6 list-disc">{children}</ul>
		),
	},
	types: {
		code: ({
			value: { filename, code, language },
		}: {
			value: { filename: string; code: string; language: string };
		}) => {
			return (
				<div className="my-10">
					{filename && (
						<div className=" mt-2 flex h-fit w-full flex-row items-center justify-between bg-primary p-4 text-sm font-medium text-background dark:bg-background dark:text-primary">
							<span>{filename}</span>
							<span className="capitalize">{language}</span>
						</div>
					)}
					<Refractor
						className="refractor mb-2"
						language={language}
						value={code}
						inline={false}
					/>
				</div>
			);
		},
		image: ({
			value: { alt, asset },
		}: {
			value: { alt: string; asset: { url: string } };
		}) => {
			return (
				<div className="relative mx-auto aspect-video w-full xl:w-[600px]">
					<Image
						className="absolute aspect-video h-full w-full object-cover"
						src={asset.url}
						layout="fill"
						alt={alt}
						priority
					/>
				</div>
			);
		},
	},
	marks: {
		code: ({ text }: { text: string }) => (
			<code className="inline-block rounded-sm bg-gray-800/10 px-[5px] py-[3px] text-sm leading-none text-primary dark:bg-gray-200/15">
				{text}
			</code>
		),
		link: ({ value, children }) => {
			return (
				<a
					className=" text-primary underline"
					href={value.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{children}
				</a>
			);
		},
	},
};
