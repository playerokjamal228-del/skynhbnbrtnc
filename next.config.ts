import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [75, 82, 88],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tokyo-skytree.jp",
        pathname: "/files/images/**",
      },
    ],
  },
};

export default nextConfig;
