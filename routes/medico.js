// routes/auth-routes.js
const express = require('express');

const router = express.Router(); //  = authRoutes const authRoutes = express.Router();

// Medico model
const bcrypt = require('bcrypt');
const Medico = require('../models/Medico');

// Bcrypt to encrypt passwords

const bcryptSalt = 10;

router.get('/cadastro', (req, res) => {
  // /signup
  res.render('./medicos/cadastro-medico');
});

router.post('/cadastro', (req, res, next) => {
  const {
    username, password, name, CRM, specialty, telResidencial, cellphone,
  } = req.body;

  console.log('TEXTO ASSIM', username);

  if (username === '' || password === '') {
    res.render('/cadastro', { message: 'Indicate email and password' });
    return;
  }

  Medico.findOne({ username })
    .then((user) => {
      console.log('caiu no then do find Medico')
      if (user !== null) {
        res.render('/cadastro', { message: 'The username already exists' });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newDoctor = new Medico({
        username,
        password: hashPass,
        name,
        CRM,
        specialty,
        telResidencial,
        cellphone,
      });

      newDoctor.save((err) => {
        if (err) {
          console.log(err)
          res.redirect('/cadastro');
        } else {
          console.log('Medico salvo')
          res.redirect('/');
        }
      });
    })
    .catch((error) => {
      next(error);
    });
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
