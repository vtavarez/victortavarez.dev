import { z } from 'zod';
import { type TypedObject } from 'sanity';

const errorMessages = {
	name: {
		required: 'Name is Required',
		min: 'Name must be 2 or more characters long',
		max: 'Name must be 2 or fewer characters long',
		regex: 'Name can only contain letters and spaces',
	},
	email: {
		required: 'Email is Required',
		invalid: 'Invalid email',
	},
	message: {
		required: 'Message is Required',
		min: 'Message must be 10 or more characters long',
		max: 'Message must be 500 or fewer characters long',
		regex: 'Message can only contain letters, numbers, and punctuation',
	},
};

export const contactSchema = z
	.object({
		name: z
			.string({ required_error: errorMessages.name.required })
			.min(2, { message: errorMessages.name.min })
			.max(100, { message: errorMessages.name.max })
			.regex(/^[a-zA-Z ]+$/, { message: errorMessages.name.regex }),
		email: z
			.string({ required_error: errorMessages.email.required })
			.email({ message: errorMessages.email.invalid }),
		message: z
			.string({ required_error: errorMessages.message.required })
			.min(10, { message: errorMessages.message.min })
			.max(500, { message: errorMessages.message.max })
			.regex(/^[a-zA-Z0-9\s.,!?]+$/, {
				message: errorMessages.message.regex,
			}),
	})
	.required();

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
