
const { log } = require('console')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went Wrong Try Again'
  }

  if(err.name === "ValidationError"){
    customError.msg = Object
    .values(err.errors)
    .map((item) => item.message)
    .join(' and ')
    customError.statusCode = 400
  }

  if(err.name === "CastError"){
    customError.msg = `No item found with id ${err.value}`
    customError.statusCode = 404
  }

  if(err.code && err.code === 11000){
    customError.msg = `The ${Object.keys(err.keyValue)} is already in use`
    customError.statusCode = 400
  }

  return res.status(customError.statusCode).json({ msg: customError.msg  })
}

module.exports = errorHandlerMiddleware


