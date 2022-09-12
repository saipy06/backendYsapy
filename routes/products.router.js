const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

// aqui se resolveria /products
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// todo lo especifico debe ir antes que lo dinamico
router.get('/filter',  (req,res)=>{
  res.send('Yo soy un filter');
})

router.get('/:id',async ( req, res, next)=> {
  try {
    const { id }  = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);   // envia el error al middleware
  }

});

// creacion de productos
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json(newProduct);
});

// update o modificacion parcial de productos
router.patch('/:id', async ( req, res, next ) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Borrado de producto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});



module.exports = router;
