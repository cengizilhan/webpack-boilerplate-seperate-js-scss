const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../Static/src'),

  // Production build files
  build: path.resolve(__dirname, '../Static/dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  images:path.resolve(__dirname, '../Static/src/images'),

  fonts:path.resolve(__dirname, '../Static/src/fonts'),
}
