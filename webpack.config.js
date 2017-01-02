module.exports = {
    context:  __dirname,
    entry: {
        bundle:'./client/App.js'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },
    devtool: "source-map",
    devServer:{
        contentBase: __dirname + '/public/'
    },
    resolve: {
        extensions: ['','.js','.jsx','.json']
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel' ],
                exclude: /node_modules/
            }
        ]
    }
};
