import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://victortavarez.dev',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://victortavarez.dev/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://victortavarez.dev/case-studies',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://victortavarez.dev/blog',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];
}
