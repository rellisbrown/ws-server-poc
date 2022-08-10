require('dotenv').config();
const express = require('express');
var cors = require('cors');
const http = require('http');
const websocket = require('./websocket');

const app = express();
const server = http.createServer(app);
/* app.use(cors({ origin: ['http://localhost:3000'] })); */

server.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

websocket(server);
