module.exports = {
	siteMetadata: {
		description: `Software Engineer, love working with Typescript, Angular and Nx.`,
		locale: 'en',
		title: "Hi. I'm Kamran",
		formspreeEndpoint: 'https://formspree.io/f/moqoqvgr',
	},
	plugins: [
		{
			resolve: '@wkocjan/gatsby-theme-intro',
			options: {
				basePath: '/',
				contentPath: 'content/',
				showThemeLogo: false,
				theme: 'classic',
			},
		},
	],
};
