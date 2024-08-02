const path = require('path')
const paths=require('../paths')

const imgs={
    from: paths.images,
    to: paths.build + '/images',
    globOptions: {
        ignore: ['*.DS_Store']
    },
    noErrorOnMissing: true
}


module.exports={imgs}