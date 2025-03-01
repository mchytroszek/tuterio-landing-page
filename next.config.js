/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    localeDetection: true
  }
};

module.exports = nextConfig; 