import { defineField, defineType, defineArrayMember } from 'sanity';

export default defineType({
	name: 'work',
	title: 'Work',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			description: 'What problem were you trying to solve?',
			type: 'string',
			validation: Rule =>
				Rule.max(200)
					.error('Excerpt should not contain more than 200 characters.')
					.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'content',
			description: '',
			validation: Rule => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'slug',
		},
	},
});
