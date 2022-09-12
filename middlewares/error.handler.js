//maneja los errores de manera global
function logErrors (err, req, res, next) {
  console.error(err);
  next(err);  //se continua, y el error se envia
}

//es un manejador estandar de errores
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if ( err.isBoom ) {
    const { output } = err;
    res.status(output.statusCode).json(output.pyload);
  }
  next(err);
}



module.exports = { logErrors, errorHandler, boomErrorHandler }
