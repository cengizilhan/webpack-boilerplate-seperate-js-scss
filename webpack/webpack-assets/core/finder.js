const path = require('path')
const fs = require('fs')
const paths = require('../../paths')

function findSCSSFiles(directory, basePath) {
    let scssFiles = [];

    fs.readdirSync(directory).forEach(item => {
        const itemPath = path.join(directory, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            scssFiles = scssFiles.concat(findSCSSFiles(itemPath, basePath));
        } else if (path.extname(item) === '.scss' && !item.startsWith('_')) {
            const relativePath = path.relative(basePath, itemPath);
            scssFiles.push({ path: itemPath, relativePath });
        }
    });

    return scssFiles;
}

function findJSFiles(directory) {
    let jsFiles = [];
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);
        if (stat.isFile() && file.endsWith('.js')) {
            jsFiles.push(filePath);
        } else if (stat.isDirectory()) {
            jsFiles = jsFiles.concat(findJSFiles(filePath));
        }
    });
    return jsFiles;
}

module.exports = { findSCSSFiles, findJSFiles };