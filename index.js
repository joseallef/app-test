const http = require('http');
const express = require('express');
// const home = require('./src/index');

const server = http.createServer(function (req, res) {
  res.write('Hello, world');
  res.end();
})

const app = express();
app.use(express.json());


// app.use('/home', home);



const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Rodando na porta ${port}`))


