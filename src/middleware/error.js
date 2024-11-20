const errorMiddleware = (err, req, res, next) => {
  
  var message = err.message || [];
  const status = err.status || 500;
  const data = err.data || [];

  // Validar si es un error de validación de sequelize
  if (err.errors && err.errors[0].message) {
    message = err.errors[0].message
  }


  res.status(status).json({
    'success': false,
    'message': message,
    'data': data
  });

}


module.exports = errorMiddleware
