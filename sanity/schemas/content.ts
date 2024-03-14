import { defineType, defineArrayMember } from 'sanity';

export default defineType({
	title: 'Content',
	name: 'content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'block',
			//@ts-ignore
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [{ title: 'Bullet', value: 'bullet' }],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Code', value: 'code' },
				],
				annotations: [
					{
						title: 'URL',
						name: 'link',
						type: 'object',
						fields: [
							{
								title: 'URL',
								name: 'href',
								type: 'url',
							},
						],
					},
				],
			},
		}),
		defineArrayMember({
			type: 'image',
			options: { hotspot: true },
			//@ts-ignore
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
				},
			],
		}),
		defineArrayMember({
			type: 'code',
			options: {
				language: 'javascript',
				languageAlternatives: [
					{ title: 'TypeScript', value: 'typescript' },
					{ title: 'JavaScript', value: 'javascript' },
					{ title: 'HTML', value: 'html' },
					{ title: 'CSS', value: 'css' },
				],
				theme: 'material',
				withFilename: true,
			},
		}),
	],
});
