const mongoose = require('mongoose');

const { Schema } = mongoose;

const PatientSchema = new Schema({
  email: { type: String },
  password: { type: String },
  name: { type: String },
  CPF: { type: String },
  birthday: { type: String },
  telResidencial: { type: Number },
  cellphone: { type: Number },
  healthInsurance: { type: Number },
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;
