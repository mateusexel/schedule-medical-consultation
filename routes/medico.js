// routes/auth-routes.js
const express = require('express');

const router = express.Router(); //  = authRoutes const authRoutes = express.Router();

// Medico model
const Medico = require('../models/Medico');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");

const bcryptSalt = 10;


router.get('/cadastro', (req, res) => {         // /signup
  res.render('./medicos/cadastro-medico');
});







// Routes protected
router.get('/agenda', (req, res) => {
  res.render('./medicos/agendamento-marcado-medico');
});

router.get('/login', (req, res) => {
  res.render('./medicos/login-medico');
});

/* FALTA FAZER AS ROTAS POST DE FORMULÁRIO */

module.exports = router;
