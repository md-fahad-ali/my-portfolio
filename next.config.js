const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add gltf loader rule
    config.module.rules.push({
      test: /\.(gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
