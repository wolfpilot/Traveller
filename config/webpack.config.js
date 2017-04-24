import path from 'path';
import webpack from 'webpack';

export default {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, '../src/index.js'),
		path.join(__dirname, '../src/styles/style.scss')
	],
	output: {
		filename: 'bundle.js',
		path: '/',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/,	loader: 'babel-loader' },
			{ test: /\.(sass|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: [
			' ',
			'.js',
			'.jsx'
		]
	}
}
