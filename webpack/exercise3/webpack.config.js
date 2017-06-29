var path = require('path');
var webpack = require('webpack');

module.exports = function (env) {
	return {
		entry: {
			main: './index.js',
		},
		output: {
			filename: '[name].[chunkhash].js',
			path: path.resolve(__dirname, 'dist')
		},
		plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor', // Specify the common bundle's name.
                minChunks: function (module) {
                	
                	return module.context && module.context.indexOf('node_modules') !== -1;
                }
            })
        ]
	}
}