const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostSchema = new Schema({
  hostName: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
}, {
  timestamps: true,
});

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;