const { StatusCodes } = require("http-status-codes");

// Error handling middleware
const errMiddleware = (err, req, res, next) => {
  console.error("Error:", err.message);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: "An error occurred during the notification process" });
};

module.exports = { errMiddleware };
