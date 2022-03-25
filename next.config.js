/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/contracts',
                permanent: true
            }
        ];
    },
    experimental: {
        outputStandalone: true
    }
};

module.exports = nextConfig;
