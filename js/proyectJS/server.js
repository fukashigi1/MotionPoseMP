const http = require('http');
const fs = require('fs');
const puerto = 3000;

const server = http.createServer(function(pedido, respuesta) {
    fs.readFile('index.html', function(error, data) {
        if (error) {
            respuesta.writeHead(404, {'Content-Type': 'text/html'});
            respuesta.write("Error: No se encontró el archivo.");
            respuesta.end();
        } else {
            respuesta.writeHead(200, {'Content-Type': 'text/html'});
            respuesta.write(data);
            respuesta.end();
        }
    });
});

server.listen(puerto, function(error) {
    if (error) {
        console.error('Ha habido un problema: ', error);
    } else {
        console.log('Servidor funcionando en puerto: ', puerto);
    }
});