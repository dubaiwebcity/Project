/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export", // ✅ keep your static export setting

  webpack: (config, { isServer }) => {
    if (isServer) {
      // 🚫 Prevent pdfjs-dist from trying to import "canvas" in Node
      config.externals.push({
        canvas: "commonjs canvas",
      });
    }
    return config;
  },
};

module.exports = nextConfig;
