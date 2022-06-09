const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const requestHandler = (req, res) => {

    res.statusCode = 200;
    
    res.setHeader('Content-Type', 'text/html');
    
    res.end('<html><head><title>HTML Response</title></head><body><h1>Example HTML response</h1></body></html>');
    
    }

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`);

});