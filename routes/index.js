const express = require('express');

const productsRouter = require('./products.router');
const usuariosRouter = require('./usuarios.router');
const categoriasRouter = require('./categorias.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/categorias', categoriasRouter);
  router.use('/usuarios', usuariosRouter);
  router.use('/products', productsRouter);
}

module.exports = routerApi;
