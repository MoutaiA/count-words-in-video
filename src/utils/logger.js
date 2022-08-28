const { createLogger, format, transports } = require('winston');

const logger = createLogger({
	format: format.combine(
		format.colorize(),
		format.timestamp(),
		format.printf((msg) => {
			return `${msg.timestamp} [${msg.level}] ${msg.message}`;
		})
	),
	transports: [new transports.Console({ level: 'http' })]
});

module.exports = logger;
