const { withNextVideo } = require("next-video/process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.youtube.com"], // Agrega aquí otros dominios si es necesario
  },
};

module.exports = withNextVideo(nextConfig);
