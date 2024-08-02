const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../paths');

const defaultFolder = path.join(paths.src, 'static-dev-templates');

const customHtmlFiles = [
    {
        template: path.join(paths.src, 'template.html'),
        filename: 'index.html'
    }
];

const getAllHtmlFiles = (dirPath, arrayOfFiles) => {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllHtmlFiles(fullPath, arrayOfFiles);
        } else if (file.endsWith('.html')) {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
};

const generateHtmlPlugins = (folders, customFiles) => {
    let templateFiles = [];

    folders.forEach(folder => {
        templateFiles = templateFiles.concat(getAllHtmlFiles(folder));
    });

    const foundHtmlFiles = templateFiles.map(templatePath => ({
        template: templatePath,
        filename: path.relative(paths.src, templatePath)
    }));

    const allHtmlFiles = [...foundHtmlFiles, ...customFiles];

    return allHtmlFiles.map(({ template, filename }) => {
        return new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: template,
            filename: filename,
            chunks: []
        });
    });
};

const htmlPlugins = generateHtmlPlugins([defaultFolder], customHtmlFiles);

module.exports = htmlPlugins;
