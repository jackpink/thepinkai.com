import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
	title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().optional(),
	});

const techBlogCollection = defineCollection({
	// Type-check frontmatter using a schema
	type: 'content',
	schema: blogSchema,
});

const supercoachBlogCollection = defineCollection({
	type: 'content',
	schema: blogSchema,
});

export const collections = { 'blog': techBlogCollection, 'supercoach-blog': supercoachBlogCollection };
