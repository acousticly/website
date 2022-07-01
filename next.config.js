const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['https://res.cloudinary.com/'],
    path: '',
    loader: 'cloudinary'
  },
  async redirects() {
    return [
      {
        source: '/invite',
        destination:
          'https://discord.com/oauth2/authorize?response_type=code&client_id=816842865732091924&scope=bot%20guilds.join%20identify%20applications.commands&permissions=8&redirect_uri',
        permanent: true
      },
      {
        source: '/support',
        destination: 'https://discord.gg/8gspb92Cns',
        permanent: true
      },
      {
        source: '/vote',
        destination: 'https://top.gg/bot/816842865732091924',
        permanent: true
      },
      {
        source: '/servervote',
        destination: 'https://top.gg/servers/830229630950047774',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/acousticlybot',
        permanent: true
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/channel/UCukKSll51JBQ1t1V9MVRHeA',
        permanent: true
      },
      {
        source: '/patreon',
        destination: 'https://patreon.com/acousticly',
        permanent: true
      },
      {
        source: '/discord',
        destination:
          'https://discord.com/servers/acoustic-community-830229630950047774',
        permanent: true
      }
    ]
  }
})
