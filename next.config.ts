/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Add trailing slashes to ensure proper static file serving
  trailingSlash: true,
  // Configure which pages should be statically generated
  exportPathMap: async function () {
    const paths: Record<
      string,
      { page: string; query?: { [key: string]: string } }
    > = {
      "/": { page: "/" },
      "/blog": { page: "/blog" },
      "/admin/login": { page: "/admin/login" },
      "/admin/dashboard": { page: "/admin/dashboard" },
      "/admin/posts/new": { page: "/admin/posts/new" },
    };

    // Add static paths for edit pages with specific IDs
    ["1", "2", "3"].forEach((id) => {
      paths[`/admin/posts/edit/${id}`] = {
        page: "/admin/posts/edit/[id]",
        query: { id },
      };
    });

    return paths;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
