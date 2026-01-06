// webpack config for stage "dev" (sample; CI copies this file to webpack.config.js)
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: { path: path.resolve(__dirname), filename: 'index.js' },
    module: { rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }] },
    resolve: { extensions: ['.js', '.jsx'] }
};
