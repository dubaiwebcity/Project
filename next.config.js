/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Azure deployment ke liye standalone output
  output: 'standalone',

  // Agar tum images manually host kar rahe ho (Next Image Optimization band karne ke liye)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
