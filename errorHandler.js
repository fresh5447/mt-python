const NotFoundError = require('./errorHandlers/notFoundError');

function errorHandler(err, req, res, next) {
  console.log('hello world')

  if (err instanceof NotFoundError) {
    console.log('NotFoundError caught in errorHandler');
    res.status(404).json(err);
  } else {
    console.log(err, 'in error handler sending 500');
    res.status(500).json(err);
  }
}

module.exports = errorHandler;
