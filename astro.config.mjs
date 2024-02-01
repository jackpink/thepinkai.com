import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), react()],
	markdown: {
		render: [
		  '@astrojs/markdown-remark',
		  {
			syntaxHighlight: 'shiki',
			shikiConfig: {
			  theme: 'nord',
			  langs: ['js', 'html', 'css', 'astro'],
			  wrap: false,
			},
		  },
		],
	  },
});