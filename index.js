const express = require('express');
const app = express();
const logger = require('./src/utils/logger');

app.use((req, res, next) => {
	const { method, path } = req;
	const { statusCode } = res;
	logger.log('http', `${method} ${path} ${statusCode}`);
	next();
});

app.get('/', (req, res) => {
	res.send('Hello world');
});

module.exports = app;
