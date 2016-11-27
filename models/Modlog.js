'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modLogSchema = new Schema({
  server:      { type: String, required: true, index: true },
  user:        { type: Object, required: true },
  mod:         { type: Object, required: false },
  type:        { type: String, required: true },
  reason:      { type: String },
  createdAt:   { type: Date, default: Date.now, expires: '30d' },
});

module.exports = mongoose.model('ModLog', modLogSchema);
