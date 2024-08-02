const path = require('path')
const fs = require('fs')
const paths = require('../paths')
const { _customScssPaths } = require('./customStyleEntries');
const { styleEntrier } = require('./core/entryConstructor');


const _styleEntries = styleEntrier({ src: '../../../Static/src/styles', dist: './styles/' });


const styleEntries = Object.assign(_styleEntries, _customScssPaths);

//write to json file for debugging
//fs.writeFileSync('styleEntries.json', JSON.stringify(styleEntries, null, 2));

module.exports = {
    styleEntries
}