import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // allowedDevOrigins: ["192.168.201.20"],
  output: "export",
  images: {
    // Firebase Hosting serves static export output; the default Image
    // Optimization loader requires a Node.js server, so it's disabled here.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
