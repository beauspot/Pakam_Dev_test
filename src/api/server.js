const express = require("express");
const axios = require("axios");
require("express-async-errors");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// importing the routes
const notificationRoute = require("./routes/appRoute");

server.use("/api/v1/notifyuser", notificationRoute);

const port = 4130;

server.listen(port, (err) => {
  if (!err) console.info("Server started on port " + port);
  else console.error("Couldn't listen on port " + port);
});
