module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "random-resource-gatsby",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-lodash",
		`gatsby-plugin-postcss`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
