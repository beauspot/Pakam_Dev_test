const express = require("express");
const axios = require("axios");
require("express-async-errors");

const server = express();

const port = 4130;

server.listen(port, (err) => {
  if (!err) console.info("Server started on port " + port);
  else console.error("Couldn't listen on port " + port);
});
