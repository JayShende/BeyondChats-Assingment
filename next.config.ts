import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
      return[
        {
          source:"/",
          destination:"/home",
          permanent:true
        }
      ]
  },
};

module.exports = {
  images: {
    domains: ['localhost','randomuser.me','static.intercomassets.com'],
  },
};

export default nextConfig;
