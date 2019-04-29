const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  date: { type: String },
  id_patient: { type: String },
  id_doctor: { type: String },
});

const appointment = mongoose.model('appointment', appointmentSchema);
module.exports = appointment;
