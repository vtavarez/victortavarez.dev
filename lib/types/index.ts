import {
	postSchema,
	projectSchema,
	recaptchaSchema,
	postsResponseSchema,
	caseStudiesResponseSchema,
	projectsResponseSchema,
	caseStudySchema,
} from '@/lib/schema';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';
import { z } from 'zod';

declare global {
	interface Window {
		readonly innerWidth: number;
	}
}

export type Inputs = {
	name: string;
	email: string;
	message: string;
	[key: string]: {};
};

export type InputsFocusState = {
	name: boolean;
	email: boolean;
	message: boolean;
	[key: string]: boolean;
};

export type SentMessage = SentMessageInfo & { error?: { message: string } };

export type Recaptcha = z.infer<typeof recaptchaSchema>;

export type PostType = z.infer<typeof postSchema>;

export type CaseStudyType = z.infer<typeof caseStudySchema>;

export type ProjectType = z.infer<typeof projectSchema>;

export type CaseStudiesResponse = z.infer<typeof caseStudiesResponseSchema>;

export type PostsResponse = z.infer<typeof postsResponseSchema>;

export type ProjectsResponse = z.infer<typeof projectsResponseSchema>;

export type AuthorType = {
	name: string;
	image: string;
	bio?: string;
	twitter?: string;
};
