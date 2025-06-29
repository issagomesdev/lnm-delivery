/**
 * @type {import('next').NextConfig}
 **/

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    turbo: false,
  },
};

module.exports = withPWA(nextConfig);