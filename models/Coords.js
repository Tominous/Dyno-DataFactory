'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordsSchema = new Schema({
	source:   String,
	name:     String,
	iv:       Number,
	cp:       Number,
	moves:    Array,
	coords:   { type: String, unique: true, required: true },
	expires:  { type: Schema.Types.Mixed },
	posted: { type: Boolean, default: false, index: true },
	createdAt: { type: Date, default: Date.now, index: true, expires: '4h' },
});

module.exports = mongoose.model('Coords', coordsSchema);
