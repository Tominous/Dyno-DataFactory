'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betaGuildSchema = new Schema({
	id:        { type: String, required: true, index: true },
	name:      { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BetaGuild', betaGuildSchema);
