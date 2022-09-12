const express = require('express');
const faker = require('faker');
const router = express.Router();

// para las categorias

//lista todos las categorias
router.get('/',(req,res)=> {
  const categorias = [];
  const { size } = req.query;
  const limit = size || 10;

  // Se carga la lista de categorias
  for (let index = 0; index < limit; index++) {
    categorias.push({
     // id: faker.name.
      user: faker.internet.userName(),
      nombre: faker.name.findName(),
    });
  }

  res.json(categorias);
});


//lista los datos del usuario solicitado
router.get('/:id',(req,res)=> {
  const { id }  = req.params;
  //devuelve todos los usuarios
  res.json({
    id,
    name: 'categoria 1'
  });
});


// crear una nueva categoria    POST


// modifica los datos de una categoria  PUT o PATCH



// elimina una categoria DELETE



module.exports = router;

