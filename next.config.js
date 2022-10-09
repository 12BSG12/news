/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com", "i.imgur.com"],
  }
}

module.exports = nextConfig
