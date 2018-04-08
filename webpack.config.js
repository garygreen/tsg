const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var fs = require('fs');

var env = (process.env.NODE_ENV || '').trim(' ');
var prod = env == 'production';

function noop() {
    return {
        apply: function () {}
    }
}

module.exports = {

    entry: {
        site: [
            './src/main.js'
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },

    devtool: prod ? '' : 'eval',

    // watch: env == 'watch',

    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(prod ? 'production' : 'development')
            }
        }),
        {
            apply: function() {
                // Who needs the HTML Wepack plugin? Yolo.
                fs.createReadStream(path.resolve(__dirname, 'src/index.html')).pipe(fs.createWriteStream(path.resolve(__dirname, 'dist/index.html')));
            }
        },
        prod ? new UglifyJsPlugin({
            cache: true
        }) : new noop
    ]

};