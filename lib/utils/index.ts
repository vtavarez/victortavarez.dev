import { PrismaClient } from '@prisma/client';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

// Tailwind CSS Classnames Merging Utility

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Date Formatting

const dateFormat = 'MMMM dd, yyyy';

export function formatDate(date: Date | string) {
	return format(new Date(date), dateFormat);
}

// Typewriter Animation

export function* typeWriter(text: string) {
	for (let char of text) {
		yield char;
	}
}

// Prisma Client

class DBConnection {
	private readonly prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	private async disconnect() {
		await this.prisma.$disconnect();
	}

	async create(data: { id: string; likes: number }) {
		try {
			const likes = await this.prisma.postLikes.create({ data });
			await this.prisma.$disconnect();
			return likes;
		} catch (error) {
			console.error(error);
		}
	}

	async update(data: { id: string; likes: number }) {
		try {
			const likes = await this.prisma.postLikes.update({
				where: { id: data.id },
				data: { likes: data.likes },
			});
			await this.prisma.$disconnect();
			return likes;
		} catch (error) {
			console.error(error);
		}
	}
}

export const db = new DBConnection();

export async function getProjects(): Promise<void> {
	const response = await fetch('https://api.example.com/work', {
		cache: 'force-cache',
		next: { tags: ['projects'] },
	});
}
