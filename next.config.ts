import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname:
          "/a/ACg8ocLApC8d0s7H9eIFAIjiP55tvnBpKYYlgJ9aAu06nB8UQez8n8E=s96-c",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname:
          "/premium-vector/blog-icon-flat-fill-set-collection_1223784-21660.jpg?semt=ais_hybrid&w=740",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
