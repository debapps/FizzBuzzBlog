/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: "akamai",
    path: "",
  },

  basePath: "/Responsive-Navbar",
  assetPrefix: "/Responsive-Navbar",
};

module.exports = nextConfig;
