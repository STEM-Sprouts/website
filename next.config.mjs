import path from "node:path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    unoptimized: true,
  },
}

export default nextConfig
