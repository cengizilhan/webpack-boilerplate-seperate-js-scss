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

### Features
- **jQuery**: Integrated for simplified DOM manipulation.
- **Separate JS and SCSS/CSS Files**: Maintains clean and organized code.
- **Concatenate JS Files**: Merges JS files without using a module system.
- **Automatic JS Build**: Automatically builds JS files ending with "*.app.js".
- **Independent HTML Templates**: Supports standalone HTML templates.
- **Custom SCSS and JS Paths**: Flexible path configuration for styles and scripts.
- **Auto-generated SCSS Files**: Generates all SCSS files under the styles directory (excluding files starting with "_").
- **Bundle Analyzer**: Included for development to analyze bundle content.

### Benefits
- Streamlined development with automated tasks.
- Clean, maintainable code structure.
- Enhanced project organization with separate file handling.
- Improved performance insights with Bundle Analyzer.

Use this boilerplate to efficiently manage your vanilla JS and SCSS projects with Webpack 5.
