const http = require("http");

const hostName = "localhost"; //127.0.0.1
const puerto = 3000;

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end('{"mensaje": "Hola mundo!!"}');
});

servidor.listen(puerto, hostName, () => {
  console.log(`Servidor ejecutandose en http://${hostName}:${puerto}`);
});
