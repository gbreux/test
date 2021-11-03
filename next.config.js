module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/graphql/:path*",
				destination: `https://api.sorare.com/graphql/:path*`,
			},
		];
	},
};
