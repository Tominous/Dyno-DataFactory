'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dynoSchema = new Schema({
	prefix:   { type: String, default: '?' },
	modules:  { type: Object, default: {} },
	commands: { type: Object, default: {} },
	testGuilds: { type: Array, default: [] },
	betaGuilds: { type: Array, default: [] },
});

module.exports = mongoose.model('Dyno', dynoSchema);
