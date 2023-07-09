// Error handling middleware
const errMiddleware = (err, req, res, next) => {
  console.error("Error:", err.message);
  console.log(err);
  if (err) return res.status(404).json({ errorMessage: err.message });
};

module.exports = { errMiddleware };
