const path = require('path');

module.exports = {
    'mode': 'development',// 'production' 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                },
            }, {
                test: /\.less|\.css$/,
                use: [{
                    loader: 'style-loader'// creates style nodes from JS strings
                },
                {
                    loader: 'css-loader'// translates CSS into CommonJS
                },
                {
                    loader: 'less-loader' // compiles Less to CSS
                }
                ]
            },
        ]
    }
};

// gulp-less