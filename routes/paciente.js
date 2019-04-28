const express = require('express');

const router = express.Router();

router.get('/agendamento', (req, res) => {
  res.render('./pacientes/agendamento-paciente');
});

router.get('/cadastro', (req, res) => {
  res.render('./pacientes/cadastro-paciente');
});

router.get('/confirmacao', (req, res) => {
  res.render('./pacientes/confirmar-dados-consulta-paciente');
});

router.get('/data-hora', (req, res) => {
  res.render('./pacientes/data-hora-paciente');
});

router.get('/imprimir', (req, res) => {
  res.render('./pacientes/imprimir-paciente');
});

router.get('/login', (req, res) => {
  res.render('./pacientes/login-paciente');
});

/* FALTA CRIAR AS ROTAS DE POST DOS FORMULARIO */

module.exports = router;
