import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
