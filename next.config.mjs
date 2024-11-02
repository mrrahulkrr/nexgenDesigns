/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      // domains: ['localhost'],
      loader: 'custom',
      loaderFile: './my-loader.ts',
    },
    webpack(config) {
      return config;
    },
  }
  
export default nextConfig;