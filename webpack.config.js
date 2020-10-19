const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [
        new CopyPlugin({
            context: './src/images',
            from: '**/*',
            to: './images'
        }),
    ],
};