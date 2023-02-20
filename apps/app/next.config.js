/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  experimental: {
    transpilePackages: ['@acme/ui'],
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
}

module.exports = nextConfig
