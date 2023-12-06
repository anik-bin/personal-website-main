/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://starter-kit-mu-two.vercel.app/blog", 
      },
      {
        source: "/blog/:path*",
        destination: "https://starter-kit-mu-two.vercel.app/blog/:path*",
    ];
  },
}

module.exports = nextConfig
