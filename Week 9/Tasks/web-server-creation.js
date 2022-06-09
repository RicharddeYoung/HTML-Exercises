const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const requestHandler = (req, res) => {

    console.log('--- INBOUND REQUEST ---')
    
    console.log(`IP address: ${req.socket.remoteAddress}`);
    
    console.log(`Request URL: ${req.url}`);
    
    console.log(`Request method: ${req.method}\n`);
    
    res.statusCode = 200;
    
    res.setHeader('Content-Type', 'text/plain');
    
    res.end('Hello World\n');
    
    }
    
    const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`);

})