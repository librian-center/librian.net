const path = require('path');

module.exports = {
    entry: './src/幹.coffee',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '束.js'
    },
    module: {
        rules: [{
            test: /\.coffee$/,
            use: ['coffee-loader']
        }, {
            test: /\.sass$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }],
    },
    // mode: 'development',
    mode: 'production',
};