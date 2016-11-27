'use strict';

const fs = require('fs');
const path = require('path');
const getenv = require('getenv');
const mongoose = require('mongoose');
const Logger = require('./logger');

const basename = path.basename(module.filename);

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
			.readdirSync('./models')
			.filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
			.forEach(file => {
				let model = require(path.join('./models', file));
				this._db[model.modelName] = model;
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
