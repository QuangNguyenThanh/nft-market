/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["openseauserdata.com"],
  },
};
const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
