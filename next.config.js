/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  env: {
    UID: process.env.UID,
    PIN: process.env.PIN,
  }
}

module.exports = nextConfig
