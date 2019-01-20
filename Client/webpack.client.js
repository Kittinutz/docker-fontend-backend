const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const config = {
	//tell root file of our
	//server  application
	entry: './src/client/client.js',

	//tell webpack where out put file
	//that is genrate
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'), //client src public naja
		chunkFilename: '[name].[chunkhash].js'
	},
}
module.exports = merge(baseConfig, config)