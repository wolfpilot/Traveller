// Helpers
const path = require('path');

// Build
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// Config
const webpackConfig = require('../config/webpack.config.dev.js');

// Server
const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.PORT || 3000;

app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port);

console.log('Listening on port ' + port);
