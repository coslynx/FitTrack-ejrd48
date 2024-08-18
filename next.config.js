/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponents: true,
    appDir: true
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*'
      },
      {
        source: '/auth/:path*',
        destination: '/api/auth/:path*'
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth/signin',
        permanent: false
      },
      {
        source: '/signup',
        destination: '/auth/signup',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;