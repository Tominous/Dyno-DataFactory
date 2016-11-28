'use strict';

const fs = require('fs');
const path = require('path');
const getenv = require('getenv');
const mongoose = require('mongoose');
const Logger = require('./logger');

const basename = path.basename(module.filename);
const modelPath = path.join(__dirname, 'models');

class DataFactory {
	constructor(options) {
		this.logger = new Logger(options.logger || {});
		this._models = {};

		this.logger.info('Connecting to mongodb...');

		mongoose.Promise = global.Promise;

		mongoose.connect(options.dbString, {
			server: {
				poolSize: 5,
				autoReconnect: true,
				reconnectTries: Number.MAX_VALUE,
				reconnectWait: 5000,
				socketOptions: {
					keepAlive: 120,
					connectTimeoutMS: 30000,
				},
			},
			promiseLibrary: global.Promise,
		});

		const connection = mongoose.connection;

		connection.on('error', this.logger.error);
		connection.once('open', () => this.logger.info('Connected to mongo.'));

		fs
			.readdirSync(modelPath)
			.filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
			.forEach(file => {
				const model = require(path.join(modelPath, file));
				this._models[model.modelName] = model;
			});
	}

	get models() {
		return this._models;
	}

	get mongoose() {
		return mongoose;
	}

	get Schema() {
		return mongoose.Schema;
	}
}

module.exports = DataFactory;
