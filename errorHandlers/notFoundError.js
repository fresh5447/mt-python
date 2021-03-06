function NotFoundError(message){
  this.name = 'NotFoundError';
  this.message = message || 'Default Message';
  Error.captureStackTrace(this, NotFoundError);
}
NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

module.exports = NotFoundError;
//
//
//
// function MyCustomError(message) {
//     this.message = message;
//     this.name = "MyCustomError";
//     Error.captureStackTrace(this, MyCustomError);
// }
// MyCustomError.prototype = Object.create(Error.prototype);
// MyCustomError.prototype.constructor = MyCustomError; 
