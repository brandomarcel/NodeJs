//PARA PRACTICA EN CONSOLA
/*const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req,res){
    res.end('Hola Mundo');
});

server.listen(8080);*/

//para la pagina

const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req,res){
    const readStream = fs.createReadStream('index.html');

    readStream.pipe(res);
});

server.listen(8080);