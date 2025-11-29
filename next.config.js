// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jagranimages.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'viso.ai',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', 
      },
      {
        protocol: 'https',
        hostname: 'cdn.mos.cms.futurecdn.net',
      },
      {
        protocol: 'https',
        hostname: 'img.jakpost.net',
      },
      {
        protocol: 'https',
        hostname: 'www.aljazeera.com',
      },
      // FIX: The new domain causing the latest error:
      {
        protocol: 'https',
        hostname: 'akm-img-a-in.tosshub.com',
      },
    ],
  },
}

module.exports = nextConfig