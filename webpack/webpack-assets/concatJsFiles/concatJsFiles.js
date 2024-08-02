const paths = require('../../paths')
const path = require('path')



 const _concat1js = {
  src: [
    paths.src + '/custom-concat-js/concat1.js',
    paths.src + '/custom-concat-js/concat2.js',


  ],// Array of source files
  dist: paths.build + '/custom-conconcat-js/concated.js', // Destination file
  minify: false, // Minify the concatenated file
}




module.exports = {
  _concat1js
};