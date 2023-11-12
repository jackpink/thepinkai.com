import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const techBlogPosts = await getCollection('blog');
	const supercoachBlogPosts = await getCollection('supercoach-blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: techBlogPosts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
		supercoach: supercoachBlogPosts.map((post) => ({
			...post.data,
			link: `/supercoach-blog/${post.slug}/`,
		})),
	});
}
