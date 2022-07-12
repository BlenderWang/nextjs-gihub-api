/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	/* Note: The remotePatterns configuration is currently experimental and subject to change. Please use domains for production use cases. */
	experimental: {
		images: {
			remotePatterns: [
				{
					protocol: "https",
					hostname: "avatars.githubusercontent.com",
				},
			],
		},
	},
};

module.exports = nextConfig;
