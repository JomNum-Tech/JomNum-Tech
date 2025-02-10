/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.easyfrontend.com', 'img.youtube.com', '7zg3rv0nfdklwx5q.public.blob.vercel-storage.com'],
    },
    output: 'standalone',
};

export default nextConfig;
