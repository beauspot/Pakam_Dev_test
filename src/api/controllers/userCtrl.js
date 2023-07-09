const { signupuserservice } = require("../services/userService");
const { StatusCodes } = require("http-status-codes");

const newUserController = async (req, res) => {
  const newUser = await signupuserservice(req.body);
  return res.status(StatusCodes.OK).json({ userData: newUser });
};

module.exports = newUserController;
