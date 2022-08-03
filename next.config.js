/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.hyperui.dev"],
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
