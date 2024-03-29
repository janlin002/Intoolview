/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   formats: ["image/avif", "image/webp"],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "assets.vercel.com",
  //       port: "",
  //       pathname: "/image/upload/**",
  //     },
  //   ],
  // },
  images: {
    domains: ["tmdb.org", "themoviedb.org"],
  },
};

export default nextConfig;
