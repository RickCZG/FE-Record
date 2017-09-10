module.exports = {
	// entry: ['./example2.1','./example2.2'],
	// output: {
	// 	filename: '[name].js'
	// }
	entry:{
    'example2.1b':'./example2.1.js',
    'example2.2b':'./example2.2.js'
	},
	output: {
		filename: '[name]-[chunkhash].js'
	}
}