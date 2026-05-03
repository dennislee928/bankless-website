// ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export removed: site is now deployed on Cloudflare Pages with
  // server-side features enabled (Pages Functions, API routes).
  // To analyze bundle sizes: ANALYZE=true yarn build (requires @next/bundle-analyzer)
}

module.exports = nextConfig
