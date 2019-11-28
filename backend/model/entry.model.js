const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  hostName: { type: String, required: true },
  address: { type: String, required: true },
  hostEmail : { type: String, required: true },
  hostPhone : { type: Number, required: true },
}, {
  timestamps: true,
});

const Entry = mongoose.model('Guest', entrySchema);

module.exports = Entry;