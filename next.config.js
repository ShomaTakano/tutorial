/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  //   images: {
  //   loader: "custom",
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // },
  // env: {
  //   nextImageExportOptimizer_imageFolderPath: "public/images",
  //   nextImageExportOptimizer_exportFolderPath: "out",
  //   nextImageExportOptimizer_quality: 75,
  //   nextImageExportOptimizer_storePicturesInWEBP: false,
  //   nextImageExportOptimizer_generateAndUseBlurImages: true,
  // },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = withVanillaExtract(nextConfig);
