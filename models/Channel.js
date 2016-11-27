'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
	_id:      String,
	server:   String,
	name:     String,
	messages: Number,
});

module.exports = mongoose.model('Channel', channelSchema);
