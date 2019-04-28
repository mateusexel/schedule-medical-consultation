const express = require('express');

const router = express.Router();

router.get('/agenda', (req, res) => {
  res.render('./medicos/agendamento-marcado-medico');
});

router.get('/cadastro', (req, res) => {
  res.render('./medicos/cadastro-medico');
});

router.get('/login', (req, res) => {
  res.render('./medicos/login-medico');
});

/* FALTA FAZER AS ROTAS POST DE FORMULÁRIO */

module.exports = router;
