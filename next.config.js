/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'blogger.googleusercontent.com',
      'youtube.com',
      'i.ytimg.com',
      'yt3.ggpht.com',
      'googlevideo.com'
    ],
    minimumCacheTTL: 9999999,
  },
};

module.exports = nextConfig
