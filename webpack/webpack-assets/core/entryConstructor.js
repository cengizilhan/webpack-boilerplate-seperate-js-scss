const path = require('path')
const fs = require('fs')
const paths = require('../../paths')
const { findSCSSFiles } = require('./finder');

function styleEntrier(_path) {
    const stylesDirectory = path.join(__dirname, _path.src);

    const scssFiles = findSCSSFiles(stylesDirectory, stylesDirectory);

    const _styleEntries = scssFiles.reduce((entries, file) => {
        const entryKey = _path.dist + `${path.dirname(file.relativePath)}/${path.basename(file.relativePath, '.scss')}`;
        entries[entryKey] = file.path.replace(/\\/g, '/');
        return entries;
    }, {});
    return _styleEntries;
}


module.exports = { styleEntrier };