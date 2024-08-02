const path = require('path');
const Terser = require('terser');

class CustomConcatCopyPlugin {
  constructor(options) {
    this.options = Array.isArray(options) ? options : [options];
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('CustomConcatCopyPlugin', async (compilation, callback) => {
      try {
        for (const config of this.options) {
          const { src, dist, minify } = config;
          let content = '';

          for (const file of src) {
            const filePath = path.resolve(compiler.context, file);
            const fileContent = compilation.inputFileSystem.readFileSync(filePath, 'utf-8');
            content += fileContent + '\n';
          }

          if (minify) {
            const minified = Terser.minify(content);
            if (minified.error) {
              throw minified.error;
            }
            content = minified.code;
          }

          const outputFilePath = path.relative(compiler.outputPath, path.resolve(compiler.context, dist));
          compilation.assets[outputFilePath] = {
            source: () => content,
            size: () => content.length,
          };
        }

        callback();
      } catch (err) {
        compilation.errors.push(new Error('CustomConcatCopyPlugin: ' + err.message));
        callback();
      }
    });
  }
}

module.exports = CustomConcatCopyPlugin;
