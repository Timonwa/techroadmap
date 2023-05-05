/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  nextConfig,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/html/careers.html",
        destination: "/careers",
        statusCode: 301,
      },
      {
        source: "/html/contribute.html",
        destination: "/contribute",
        statusCode: 301,
      },
      {
        source: "/html/careers/frontend.html",
        destination: "/careers/frontend",
        statusCode: 301,
      },
      {
        source: "/html/careers/backend.html",
        destination: "/careers/backend",
        statusCode: 301,
      },
      {
        source: "/frontend",
        destination: "/careers/frontend",
        statusCode: 301,
      },
      {
        source: "/backend",
        destination: "/careers/backend",
        statusCode: 301,
      },
    ];
  },
});
