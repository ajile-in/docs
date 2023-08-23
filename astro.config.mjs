import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CREDEBL Docs',
			logo: {
				alt: 'CREDEBL Logo',
				src: './src/assets/CREDEBL_ICON.png',
			  },
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},
				// zh: {
				// 	label: 'Dzongkha (Bhutan)',
				// 	lang: 'dz_BT',
				// },
				hi: {
					label: 'हिंदी (India)',
					lang: 'hi',
				},
			},
			social: {
				github: 'https://github.com/credebl',
				twitter: 'https://twitter.com/credebl',
				discord: 'https://discord.gg/w4hnQT7NJG',
				youtube: 'https://youtube.com/@astrodotbuild',
			},
			sidebar: [
				{
					label: 'Intro',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is CREDEBL?', link: '/en/intro/what-is-credebl/' },
						{ label: 'Platform Features', link: '/en/intro/platform-features/' },
						{ label: 'Intro to SSI', link: '/en/intro/intro-to-ssi/' },
						{ label: 'Key Concepts', link: '/en/intro/key-concepts/' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/en/guides/getting-started/' },
						{ label: 'Architecture', link: '/en/guides/architecture/' },
						{ label: 'Local Setup', link: '/en/guides/local-setup/' },
						{ label: 'Self-hosting', link: '/en/guides/self-hosting/' },
						{ label: 'Using credebl.id', link: '/en/guides/using-credebl-id/' },
					],
				},
				{
					label: 'Reference',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'API Reference', link: '/en/reference/api-reference/' },
					],
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Support',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Community', link: '/en/support/community/' },
						{ label: 'Troubleshooting', link: '/en/support/troubleshooting/' },
					],
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
