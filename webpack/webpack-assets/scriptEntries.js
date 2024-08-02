const path = require('path');
const fs = require('fs');
const paths = require('../paths');
const {findJSFiles} = require('./core/finder');

//custom js paths
let otherArr = [
    // Custom entries / non -app or -vendor entries
{
    src: paths.src + '/custom-script-path/test1.js',
    dist: './custom-script-path/test1.min'
}

];


const scriptFiles = findJSFiles(paths.src + '/scripts');
//makes automatic entries for done with *app.js and *vendor.js files //
scriptFiles.forEach(file => {
    const fileName = path.basename(file);
    if (fileName.endsWith('.app.js') || fileName.endsWith('.vendor.js') ){
        const relativePath = path.relative(paths.src + '/scripts', path.dirname(file));
        const distPath = `./scripts/${relativePath}/${path.basename(file, '.js')}.min`;
        otherArr.push({
            src: file,
            dist: distPath.replace(/\\/g, '/')
        });
    }
});


const scriptArr = [...otherArr];

const _scripts = {};
scriptArr.forEach(item => {
    _scripts[item.dist] = Array.isArray(item.src) ? item.src : [item.src];
});

const scriptEntries=_scripts;
//write to json file scriptentries
//fs.writeFileSync(paths.src + '/entries.json', JSON.stringify(scriptEntries, null, 4), 'utf8');

module.exports = scriptEntries;

