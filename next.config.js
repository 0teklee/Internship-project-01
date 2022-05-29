/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3-ap-northeast-1.amazonaws.com",
      "s3.ap-northeast-1.amazonaws.com",
      "cdn.zeplin.io",
    ],
  },
};

module.exports = nextConfig;
