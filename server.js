// Job is to create server and listen on port 8000

const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);
const io = socketio(expressServer);

module.exports = {
  app,
  io,
};
