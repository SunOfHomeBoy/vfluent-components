const webpackConfigure = require('./webpack.config')

module.exports = webpackConfigure({
        entry: {
                'vfluents': 'vfluents.tsx'
        },
        rootDir: 'demo'
})