require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const { StatusCodes } = require("http-status-codes");

// DB configurations
const dbConfig = require("../api/config/dbConfig");

// Error Middlware
const errMidd = require("./middleware/errHandlerMiddleware");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));

// importing the routes
const notificationRoute = require("./routes/appRoute");
const userSignupRoute = require("./routes/userRoute");

server.get("/", (req, res) =>
  res
    .status(StatusCodes.OK)
    .json({ message: "Welcome to the notification api" })
);

server.use("/api/v1/notifyuser", notificationRoute);
server.use("/api/v1/register", userSignupRoute);

server.use(errMidd.errMiddleware);
const port = 4130;

const startServer = async () => {
  try {
    await dbConfig(process.env.MONGO_URL);
    server.listen(port, (err) => {
      if (!err) console.info("Server started on port " + port);
      else console.error("Couldn't listen on port " + port);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
