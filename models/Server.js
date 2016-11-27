'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Server schema
 * @type {"mongoose".Schema}
 */
const serverSchema = new Schema({
	_id:      { type: String },
	prefix:   { type: String, default: '?' },
	credits:  { type: Number, default: 0 },
	modules:  { type: Object, default: {} },
	commands: { type: Object, default: {} },
	mods:     { type: Array,  default: [] },
	modRoles: { type: Array,  default: [] },
	modonly:  { type: Boolean, default: false },
	deleted:  { type: Boolean, default: false, index: true },
	debug:    { type: Boolean },
	beta:     { type: Boolean },
	vip:      { type: Boolean },
});

/**
 * Server model
 * @type {"mongoose".Model<serverSchema>}
 */
module.exports = mongoose.model('Server', serverSchema);
