/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { 
    images: { 
      allowFutureImage: true 
    } 
  },
  images: {
    domains: [
      "scontent.fcai20-6.fna.fbcdn.net",
      "firebasestorage.googleapis.com",
    ]
  }
}



module.exports = nextConfig
