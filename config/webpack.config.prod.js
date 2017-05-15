const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		path.join(__dirname, '../src/index.js'),
		path.join(__dirname, '../src/styles/style.scss')
	],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '../public/assets/'),
		publicPath: '/assets/'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/,	loader: 'babel-loader' },
			{ test: /\.(sass|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.svg$/, loaders: [ 'babel-loader', { loader: 'react-svg-loader', query: { jsx: true } }, ] }
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
	],
	resolve: {
		extensions: [
			' ',
			'.js',
			'.jsx'
		]
	}
};
