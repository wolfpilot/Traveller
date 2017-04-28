// Helpers
const path = require('path');

// Build
const express = require('express');

// Server
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port);

console.log('Listening on port ' + port);
