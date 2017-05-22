module.exports = {
    entry: "./toBundle.js",
    output: {
        path: __dirname,
        filename: "bundle.js"

    },
    module: {
        loaders: [
            //解析css中的图片路径
            { test: /\.(png|jpg|gif|ico)$/, loader: 'url-loader' },
            //.js文件解析
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //解析css文件
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]

    },

};