## Webpack 5 Boilerplate Separate JS & SCSS

### Overview
If your project is written in vanilla JS and SCSS, this Webpack 5 boilerplate is designed to meet your needs. It is inspired by Tania Rascia's webpack repo and has been improved for enhanced functionality.

### Usage

- **Development**: `npm run start`
  - Features: Bundle Analyzer, HTML Template, Dev Server
  - URL: [http://localhost:5026/Static/dist/static-dev-templates/example/template.html](http://localhost:5026/Static/dist/static-dev-templates/example/template.html)

- **Production**: `npm run build`
  - Features: Only Build, No HTML Template, No Bundle Analyzer

### Requirements
- **Node Version**: 20.14.0

## Jest Unit Tester
/npm run test
Example:
-create-video.js
-create-video.test.js


## JS
Scripts ending with .app, -app, .vendor, -vendor under Static/src/scripts are transferred to the dist directory.
For custom paths: ./webpack-assets/scriptsEntries.js/customJsPaths

## SCSS
All SCSS files under Static/src/styles, except those starting with "_", are converted to CSS.
For custom paths: ./webpack-assets/customStyleEntries.js

## Concat Js Files
Concatenation of JS files was added out of necessity for older files; it is recommended not to use the concat structure for new files. Instead, you can use the ES6/webpack module system.

./webpack-assets/concatJsFiles.js

## Copy Files
./webpack-assets/copyWebPackEntries.js

## HTML Landings
Each HTML file under Static/src/static-dev-templates is transferred to the dist directory only in "dev" mode; they are not generated during the build process.
You can create SCSS files under src/styles and add the relevant paths.
For JS: create the files under src/script and add the relevant paths.
Example: static/src/static-dev-templates/example

### Features
- **jQuery**: Integrated for simplified DOM manipulation.
- **Separate JS and SCSS/CSS Files**: Maintains clean and organized code.
- **Concatenate JS Files**: Merges JS files without using a module system.
- **Automatic JS Build**: Automatically builds JS files ending with "*.app.js".
- **Independent HTML Templates**: Supports standalone HTML templates.
- **Custom SCSS and JS Paths**: Flexible path configuration for styles and scripts.
- **Auto-generated SCSS Files**: Generates all SCSS files under the styles directory (excluding files starting with "_").
- **Bundle Analyzer**: Included for development to analyze bundle content.
- **Jest**: Configured for unit and integration testing within the Static/src/scripts directory.


### Benefits
- Streamlined development with automated tasks.
- Clean, maintainable code structure.
- Enhanced project organization with separate file handling.
- Improved performance insights with Bundle Analyzer.
- Reliable code quality with Jest testing.

Use this boilerplate to efficiently manage your vanilla JS and SCSS projects with Webpack 5 and ensure code quality with Jest.