//require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const { StatusCodes } = require("http-status-codes");

// Error Middlware
const errMidd = require("./middleware/errHandlerMiddleware");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));

// importing the routes
const notificationRoute = require("./routes/appRoute");

server.get("/", (req, res) =>
  res
    .status(StatusCodes.OK)
    .json({ message: "Welcome to the notification api" })
);
server.use("/api/v1/notifyuser", notificationRoute);

server.use(errMidd.errMiddleware);
const port = 4130;

server.listen(port, (err) => {
  if (!err) console.info("Server started on port " + port);
  else console.error("Couldn't listen on port " + port);
});
