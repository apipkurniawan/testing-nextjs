// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'testing_app',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          //NOTE - Expose the components here
        },
        shared: {},
      }),
    );

    return config;
  },
};
