const loadable = require('react-loadable/webpack')

module.exports = {
	//tell webpack run babel on every file it runs through
	module: {
		rules: [
			{
				//test js file all !!!
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { target: { browsers: ['last 2 versions'] } }]
					],
				},
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' }
				]
			}
		],
	},
	plugins: [
		new loadable.ReactLoadablePlugin({
			filename: './dist/react-loadable.json',
		}),
	],
}