import path from 'path';

export default {
	entry: path.join(__dirname, '../src/index.js'),
	output: {
		filename: 'bundle.js',
		path: '/'
	},
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
