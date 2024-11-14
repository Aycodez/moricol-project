/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "i5.walmartimages.com",
      },
    ],
  },
};

export default nextConfig;
