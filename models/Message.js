'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	id: { type: String, index: true },
	createdAt: { type: Date, default: Date.now(), expires: '4h' },
}, { strict: false });

module.exports = mongoose.model('Message', messageSchema);
