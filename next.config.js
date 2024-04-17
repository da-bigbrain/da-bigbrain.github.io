/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
    ],

    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  transpilePackages: ["react-daisyui"],
  // output: "standalone",
  output: "export",
};

module.exports = nextConfig;
