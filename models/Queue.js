'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueItemSchema = new Schema({
	video_id:      { type: String, required: true },
	title:         { type: String },
	description:   { type: String },
	thumbnail_url: { type: String },
	url:           { type: String },
	length:        { type: Number },
	user:          { type: Object },
	v:             { type: Number },
});

/**
 * Server schema
 * @type {"mongoose".Schema}
 */
const queueSchema = new Schema({
	guild:    { type: String },
	name:     { type: String },
	queue:    [queueItemSchema],
	creator:  { type: Object },
});

/**
 * Server model
 * @type {"mongoose".Model<serverSchema>}
 */
module.exports = mongoose.model('Queue', queueSchema);
