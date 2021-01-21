const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const optimizedImages = require('next-optimized-images')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const pluginCompose = ({ webpackCallback, configCallBack }) => (
  nextConfig = {}
) => {
  return {
    phases: [PHASE_PRODUCTION_BUILD],
    ...(configCallBack ? configCallBack(nextConfig) : nextConfig),
    ...(webpackCallback
      ? {
        webpack(config, options) {
          config = webpackCallback(config, options)

          if (typeof nextConfig.webpack === 'function') {
            return nextConfig.webpack(config, options)
          }

          return config
        },
      }
      : {}),
  }
}

const getNextConfig = ({
                         serverRuntimeConfig = {},
                       }) => ({
  // Development Buffer settings
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },
  // Build ID setup
  generateBuildId: async () => process.env.BUILD_ID || null,
  // webpack configuration for PROD build
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, {}) => {
    // config modifications
    return config
  },
  // webpack configuration for DEV build
  // Perform customizations to webpack dev middleware config
  webpackDevMiddleware: (config) => config,
  pwa: {
    disable: false,
    register: true,
    dest: 'public',
    cacheId: 'cnmn_fe_service-worker',
    // delete old precaches
    cleanupOutdatedCaches: true,
    // Do not precache images by default and config files
    exclude: [/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|json)$/],
    runtimeCaching: [
      // Cache the rest network requests for offline mode
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'cnmn_http-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 15 * 24 * 60 * 60, // 15 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      // Cache images on demand
      {
        urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cnmn_images',
          // Only cache 20 images.
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 15 * 24 * 60 * 60, // 15 days
          },
        },
      },
      {
        // JS,CSS and fonts
        urlPattern: /^https?:.*\.(js|css|woff|woff2|json)/,
        handler: `CacheFirst`,
        options: {
          cacheName: 'cnmn_static',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 15 * 24 * 60 * 60, // 15 days
          },
        },
      },
      // Google Fonts
      {
        urlPattern: /^https?:\/\/(?:fonts\.googleapis\.com\/css|fonts\.gstatic\.com\/)/,
        handler: `CacheFirst`,
        options: {
          cacheName: 'cnmn_google-fonts',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 15 * 24 * 60 * 60, // 15 days
          },
        },
      },
    ],
    skipWaiting: true,
    clientsClaim: true,
  },
})

module.exports = withPlugins(
  [
    pluginCompose({
      configCallBack: (nextConfig) => ({
        ...withPWA(nextConfig),
      }),
    }),
    [
      // https://github.com/cyrilwanner/next-optimized-images#configuration
      optimizedImages,
      {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: true,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
      },
    ],
  ],
  getNextConfig({})
)