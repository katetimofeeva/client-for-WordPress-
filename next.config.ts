import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["dev-cs-test-50-13.pantheonsite.io"], // Укажите разрешенные домены
  },
  appDir: true,
};

export default nextConfig;
