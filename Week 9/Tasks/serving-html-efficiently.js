const http = require('http');

const fs = require('fs').promises;

const hostname = '127.0.0.1';

const port = 3000;

let index;

function ok(html, res) {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end(html);

}

const requestHandler = (req, res) => ok(index, res);

const server = http.createServer(requestHandler);

fs.readFile(__dirname + '/index.html')

.then(data => {

index = data;

server.listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`);

});

})

.catch(error => {

console.error(`Could not find index.html: ${error}`);

process.exit(1);

}) 