const mongoose = require('mongoose');

const { Schema } = mongoose;

const PatientSchema = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String },
  cpf: { type: String },
  birthdate: { type: String },
  telResidencial: { type: String },
  cellphone: { type: String },
  healthInsurance: { type: String },
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;
