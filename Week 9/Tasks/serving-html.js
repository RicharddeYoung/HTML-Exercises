const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs').promises;

const requestHandler = (req, res) => {

    fs.readFile(__dirname + '/index.html')
    
    .then(data => {
    
    res.statusCode = 200;
    
    res.setHeader('Content-Type', 'text/html');
    
    res.end(data);
    
    })
    
    .catch(error => {
    
    console.error(error.message);
    
    res.statusCode = 404;
    
    res.setHeader('Content-Type', 'text/html');
    
    res.end('<html><head><title>Resource not found</title></head><body><h1>Error: Resource not found</h1></body></html>');
    
    });
    
    }

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
})