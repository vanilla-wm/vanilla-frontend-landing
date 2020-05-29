module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['next/babel'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './',
            assets: './assets',
            base: './components/base',
            layout: './components/layout',
            section: './components/sections',
            utils: './utils',
            theme: './theme',
          },
        },
      ],
      [
        'styled-components',
        {
          displayName: true,
          minify: true,
          pure: true,
          ssr: true,
          preprocess: false,
        },
      ],
    ],
  }
}
