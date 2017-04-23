import path from 'path';
import webpack from 'webpack';

export default {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, '../src/index.js'),
	],
	output: {
		filename: 'bundle.js',
		path: '/',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: [
			' ',
			'.js',
			'.jsx'
		]
	}
}
