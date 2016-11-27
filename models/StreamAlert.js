'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streamAlertSchema = new Schema({
	service: { type: String, required: true, index: true },
	channel: { type: String, required: true },
	dchannel: { type: String, required: true },
	guild: { type: String, required: true, index: true },
});

module.exports = mongoose.model('StreamAlert', streamAlertSchema);
