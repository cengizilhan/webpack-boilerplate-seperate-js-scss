/* https://www.npmjs.com/package/webpack-error2json */
const fs = require('fs');
const path = require('path');

class ErrorToJsonPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('ErrorToJsonPlugin', stats => {
      const info = stats.toJson();
      
      if (stats.hasErrors()) {
        const formattedErrors = info.errors.map(err => {
          let message = err.message;
          let details = err.details || '';

          // Replace spaces and new lines with a single space and remove leading and trailing spaces
          message = message.replace(/\s+/g, ' ').replace('"', '').trim();
          details = details.replace(/\s+/g, ' ').replace('"', '').trim();

          return {
            message,
            details,
          };
        });

        // Write errors to a JSON file
        const errorsOutputPath = path.resolve(__dirname, './results/webpack-errors.json');
        fs.writeFileSync(errorsOutputPath, JSON.stringify(formattedErrors, null, 2));
      }

      if (stats.hasWarnings()) {
        const formattedWarnings = info.warnings.map(warn => {
          let message = warn.message;
          let details = warn.details || '';

          // Replace spaces and new lines with a single space and remove leading and trailing spaces
          message = message.replace(/\s+/g, ' ').replace('"', '').trim();
          details = details.replace(/\s+/g, ' ').replace('"', '').trim();

          return {
            message,
            details,
          };
        });

        // Write warnings to a JSON file
        const warningsOutputPath = path.resolve(__dirname, './results/webpack-warnings.json');
        fs.writeFileSync(warningsOutputPath, JSON.stringify(formattedWarnings, null, 2));
      }
    });
  }
}

module.exports = ErrorToJsonPlugin;