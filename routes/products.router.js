const express = require('express');
const ProductsService = require('./../services/product.service');
const validatorHandler =  require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } =  require('./../schemas/product.schema');



const router = express.Router();
const service = new ProductsService();

// aqui se resolveria /products
router.get('/', async (req, res) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// todo lo especifico debe ir antes que lo dinamico
router.get('/filter',  (req,res)=>{
  res.send('Yo soy un filter');
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async ( req, res, next)=> {
    try {
      const { id }  = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);   // envia el error al middleware
    }
  }
);

// creacion de productos
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
        const body = req.body;
        const newProduct = await service.create(body);
        res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// update o modificacion parcial de productos
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async ( req, res, next ) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Borrado de producto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});



module.exports = router;
