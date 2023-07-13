require('dotenv').config();
const express = require('express');
const path = require('path');

const server = express();

const { PORT } = process.env;

server.use(express.json());
server.use(express.static(path.resolve(`${__dirname}/react-ui/build`)));

server.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

// delegate client-side routing to the client
server.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/react-ui/build/index.html')`));
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
})