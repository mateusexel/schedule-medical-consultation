const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const appointmentSchema = new Schema({
  date: { type: String},
  id_patient: { type: String},
  id_doctor: { type: String, default: 'images/default-avatar.png' }
});

const appointment = mongoose.model('appointment', appointmentSchema);
module.exports = appointment;


/* 

VERIFICAR NO SITE ABAIXO UMA FORMA DE INSERIR VARIOS MODELS JUNTOS 

https://pt.stackoverflow.com/questions/131463/mongoose-objeto-%C3%BAnico-em-um-array */

/* 
MONGOOSE MATERIAL

http://learn.ironhack.com/#/learning_unit/6482 */