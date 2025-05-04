/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Add trailing slashes to ensure proper static file serving
  trailingSlash: true,
};

module.exports = nextConfig;
