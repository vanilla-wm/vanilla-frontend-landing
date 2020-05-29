const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
})
