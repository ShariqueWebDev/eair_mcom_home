import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL,
  },
  /* config options here */
};

export default nextConfig;
