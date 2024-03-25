
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
  output: 'export',
  distDir: 'dist',
 
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        
      },
    ],
  },
  
};

module.exports = nextConfig;
