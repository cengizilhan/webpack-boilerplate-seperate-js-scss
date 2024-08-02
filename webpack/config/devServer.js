
const path = require('path')
const serverActive = process.env.devServer == 'false' ? false : true;
console.log("devServer : ",serverActive);

let devServer = {};

if (serverActive) {
    devServer = {
        liveReload: false,
        allowedHosts: [
            'all'
        ],
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
        client: {
            overlay: false,
            progress: false,

        },
        static: {
            directory: path.join(__dirname, '/')
        },
        compress: true,
        historyApiFallback: true,
        open: true,
        port: 5026,
        proxy: [{
            context: ['/Static/dist'],
            target: 'http://localhost:5026',
            pathRewrite: {
                '^/Static/dist': ''
            },
            changeOrigin: true,
            secure: false,

    }],
        devMiddleware: {
            writeToDisk: true,
        },
    };

}

module.exports = { devServer }