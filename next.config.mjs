/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Set the 'process' to undefined in the client-side bundle
    config.plugins.push(
      new webpack.DefinePlugin({
        process: 'undefined'
      })
    );
    return config;
  },

};

export default nextConfig;
