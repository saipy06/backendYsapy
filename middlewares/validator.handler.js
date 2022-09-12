const boom = require('@hapi/boom');

//es un manejador estandar de errores
function validatorHandler(schema, property ) {
  return (req, res, next) => {
    const data = req[property]; // se le envia de forma dinamica, para ver si viene en el body, params o ..
    const { error } = schema.validate(data);
    if (error){
       next(boom.badRequest(error));
    }
    next();
  }
}


module.exports = { validatorHandler };
