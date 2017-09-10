const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');


const PATHS = {
	app: path.join(__dirname, 'app'),
	about: path.join(__dirname, 'about'),
	build: path.join(__dirname, 'build')
}
const extractTextPlugin = new ExtractTextPlugin({
	filename: '[name].css',
	ignoreOrder: true
})

module.exports = {
	devServer: {
		host: 'localhost',
		port: '8888',
		// overlay: {
		// 	errors: true,
		// 	warnings: true
		// }
	},
	entry: {
		// app: PATHS.app,
		// about: PATHS.about,
		index: './app/index.js',
		about: './app/about.js',
		vendor: ['react']
	},
	devtool: 'source-map',
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	performance: {
		hints: 'warning',
		maxEntrypointSize: 100000,
		maxAssetSize: 450000
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: extractTextPlugin.extract({
					use: {
						loader: 'css-loader',
						options: {
							modules: true,
						}
					},
					fallback: 'style-loader'
				}),
			}
		]
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	title: 'webpack demo'
		// }),
		// new webpack.HotModuleReplacementPlugin({

		// })
		extractTextPlugin,
		new BabiliPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}