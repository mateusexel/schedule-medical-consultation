const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DoctorSchema = new Schema({
    email: { type: String},
    password: { type: String}
    name: { type: String},
    CRM: { type: String},
    specialty: { type: String},
    telResidencial: { type: Number},
    cellphone: { type: Number},
});

const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;