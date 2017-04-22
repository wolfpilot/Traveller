// Helpers
import path from 'path';

// Build
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

// Config
import webpackConfig from '../config/webpack.config.js';

// Server
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000'));
