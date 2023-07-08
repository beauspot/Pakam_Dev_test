const { StatusCodes } = require("http-status-codes");

// Error handling middleware
const errMiddleware = (err, req, res, next) => {
  console.error("Error: ", err.message);
  if (err)
    return res.status(err.statusCode).json({ erroorMessage: err.message });
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ errorMessage: err.message });
};

module.exports = { errMiddleware };
