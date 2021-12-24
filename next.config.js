module.exports = {
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['https://res.cloudinary.com/'],
    path: '',
    loader: 'cloudinary'
  }
}
