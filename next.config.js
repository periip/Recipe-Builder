const nextConfig = {
    env: {
        PORT: process.env.PORT || 3000,  // Use 3000 as default
    },
    serverExternalPackages: ["oracledb"],
    async redirects() {
        return [
            {
                source: '/',
                destination: '/chef',
                permanent: true,
            },
        ]
    },
};

module.exports = nextConfig;