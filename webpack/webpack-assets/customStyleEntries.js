
const path = require('path')
const paths=require('../paths')
const basePath = path.resolve(__dirname);

const customStyleArr = [
    {
        src:  path.resolve(basePath, paths.src, "custom-style-path/test1.scss"),
        dist: './custom-style-path/test1'
    },

]

    const _customScssPaths = customStyleArr.reduce((entries, file) => {
        const entryKey = file.dist;
        entries[entryKey] = file.src;
        return entries;
    }, {});

    module.exports={_customScssPaths}
