const express = require('express');
//const faker = require('faker');
const cors = require('cors');
const routerApi = require('./routes');
//const router = require('./routes/products.router');

const app = express();
const port = process.env.PORT || 3000;

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');


// se habilita el json para recibir datos del body
app.use(express.json());

const whitelist = ['http:localhost:8080', 'https://myapp.com','http://127.0.0.1:5500', 'http://localhost:5500'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send(' Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send(' Hola, soy la nueva ruta');
});


routerApi(app);
// es muy importante el orden, ya que errorHandler no tiene next
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
});
