/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "starter-kit-anik-bin.vercel.app/blog", 
      },
      {
        source: "/blog/:path*",
        destination: "starter-kit-anik-bin.vercel.app/blog/:path*",
    ];
  },
}

module.exports = nextConfig
