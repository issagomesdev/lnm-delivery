/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    turbo: false, 
  },
}

module.exports = nextConfig