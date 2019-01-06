const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
	//inform webpack buidling bunddle
	//for nodjs reather than for the browser
	target: 'node',

	//tell root file of our
	//server  application
	entry: './src/index.js',

	//tell webpack where out put file
	//that is genrate
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		chunkFilename: '[name].[chunkhash].js'
	},
	externals:[webpackNodeExternals()]

}
module.exports = merge(baseConfig,config)