import {
	postSchema,
	projectSchema,
	recaptchaSchema,
	projectsResponseSchema,
} from '@/lib/schema';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';
import { z } from 'zod';
import { error } from 'console';

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

export type SentMessageType = SentMessageInfo & { error?: { message: string } };

export type RecaptchaType = z.infer<typeof recaptchaSchema>;

export type PostType = z.infer<typeof postSchema>;

export type Project = z.infer<typeof projectSchema>;

export type ProjectsData = {
	error?: string;
	projects: Project[];
};

export type ProjectsResponse = z.infer<typeof projectsResponseSchema>;

export type AuthorType = {
	name: string;
	image: string;
	bio?: string;
	twitter?: string;
};
