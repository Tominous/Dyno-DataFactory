'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moderationSchema = new Schema({
	server:      { type: String, required: true, index: true },
	channel:     { type: String, required: true },
	user:        { type: Object, required: true },
	mod:         { type: String, required: true },
	type:        { type: String, required: true },
	createdAt:   { type: Date, default: Date.now },
	completedAt: { type: Date, required: true, index: true },
});

module.exports = mongoose.model('Moderation', moderationSchema);
