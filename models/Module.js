'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
	name: { type: String, index: true, required: true },
	_state: { type: Boolean, index: true },
}, { strict: false });

module.exports = mongoose.model('Module', moduleSchema);
