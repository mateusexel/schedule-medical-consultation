const mongoose = require('mongoose');

const { Schema } = mongoose;

const DoctorSchema = new Schema({
  /* username: { type: String },
  password: { type: String }, */
  name: { type: String },
  crm: { type: String },
  specialty: { type: String },
  email: { type: String },
  /* telResidencial: { type: String },
  cellphone: { type: String }, */
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;
