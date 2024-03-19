import { z } from 'zod';
import { type TypedObject } from 'sanity';

export const contactSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is Required' })
			.max(100, { message: 'Name can not exceeed 100 characters.' })
			.regex(/^[a-zA-Z ]+$/, {
				message: 'Name can only contain letters and spaces.',
			}),
		email: z
			.string({ required_error: 'Email is Required' })
			.email({ message: 'Invalid email' }),
		message: z
			.string({ required_error: 'Please include a brief message.' })
			.min(10, { message: 'Message must be at least 10 characters long.' })
			.max(500, { message: 'Message can not exceed 500 characters.' })
			.regex(/^[a-zA-Z0-9\s\.,!?()-]+$/, {
				message: 'Message can only contain commonly used characters.',
			}),
	})
	.required();

export const contactResponseSchema = z.object({
	accepted: z.array(z.string()),
	rejected: z.array(z.string()),
	response: z.string(),
	envelope: z.object({
		from: z.string(),
		to: z.array(z.string()),
	}),
	messageId: z.string(),
});

export const recaptchaSchema = z.object({
	event: z.object({
		expectedAction: z.string(),
	}),
	riskAnalysis: z.object({
		reasons: z.array(z.string()),
		score: z.number(),
	}),
	tokenProperties: z.object({
		action: z.string(),
		valid: z.boolean(),
	}),
});

export const postSchema = z.object({
	id: z.string(),
	title: z.string(),
	publishedAt: z.string(),
	excerpt: z.string(),
	timeToRead: z.number(),
	slug: z.string(),
	categories: z.array(z.string()),
	author: z.object({ name: z.string(), image: z.string() }),
	body: z.custom<TypedObject>().array(),
});

export const postsResponseSchema = z.array(postSchema);

export const caseStudySchema = z.object({
	id: z.string(),
	title: z.string(),
	excerpt: z.string(),
	kickoffDate: z.string(),
	duration: z.string(),
	slug: z.string(),
	categories: z.array(z.string()),
	body: z.custom<TypedObject>().array(),
});

export const caseStudiesResponseSchema = z.array(caseStudySchema);

export const projectSchema = z.object({
	name: z.string(),
	description: z.string(),
	url: z.string(),
	stargazerCount: z.number(),
	forkCount: z.number(),
	primaryLanguage: z.object({ name: z.string() }),
});

export const projectsResponseSchema = z.object({
	data: z.object({
		viewer: z.object({
			repositories: z.object({
				nodes: z.array(projectSchema),
			}),
		}),
	}),
});
