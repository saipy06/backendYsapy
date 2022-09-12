const express = require('express');
const faker = require('faker');
const router = express.Router();

// para usuario

//lista todos los usuarios
router.get('/',(req,res)=> {
  const usuario = [];
  const { size } = req.query;
  const limit = size || 10;

  // Se carga la lista de usuarios en  usuario
  for (let index = 0; index < limit; index++) {
    usuario.push({
     // id: faker.name.
      user: faker.internet.userName(),
      nombre: faker.name.findName(),
      email: faker.internet.email()
    });
  }

  res.json(usuario);
});


//lista los datos del usuario solicitado
router.get('/:id',(req,res)=> {
  const { id }  = req.params;
  //devuelve todos los usuarios
  res.json({
    id,
    name: 'Usario 1'
  });
});


// crear un nuevo usuario   POST


// modifica los datos de un usuario



module.exports = router;


