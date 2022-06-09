'use strict';

/* Create a simple Todo API
 * 
 * Your task is to create an API using the http module in Node.js to allow for CRUD functionality against 
 * todo items, that is the ability to:
 * 
 * - Create
 * - Read
 * - Update
 * - Delete
 * 
 * todo items.
 * 
 * The structure you choose is upto you for this exercise, you may do this all in one file or split your work
 * into multiple files (separation of concerns).
 * 
 * NOTE: As we have not covered path parameters with the HTTP module, you must make use of query parameters instead. You will also need to use the
 *       request body for sending payloads of data for creating or modifying resources on the API and the response body for returning data.
 */

const http = require('http');
const URL = require('url');
const { finished } = require('stream');

const hostname = '127.0.0.1';
const port = 3000;

const notFound = (req, res,url) => {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Page not found</h1>');
}

const toDoList = [{"id":1,"toDo":"Stuff"},{"id":2, "toDo":"moreSuff!"}];

const handleGet = (req,res,url) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(JSON.stringify(toDoList));
    res.end();
}

const handlePost = async (req,res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(body));
    toDoList.push(chunk);
    get();
    const body = await handlePost(req, res);
    console.log(body);
}

const handleGetById = (req,res) => {
    const id = request.params.id;
    const obj = toDoList.find(obj => obj.id == id)
    res.write(JSON.parse(toDoList[id]));
}

const handlePut = async (req,res) => {
    res.statusCode = 200;
    const id = url.query.id;
    res.setHeader('Content-Type', 'application.json');
    res.write(JSON.stringify(body));
    for await (const chunk of req) {
        toDoList.push(JSON.stringify(body));
    }
}

const handleDelete = (req, res) => {
    switch (url.pathname) {
        case "/delete":

            break;
        default:
            notFound(req,res);
            break;
    }
}

const requestHandler = (req,res) => {
    const url = URL.parse(req.url, false);

    console.log('--- INBOUND REQUEST ---')
    console.log(`IP address: ${req.socket.remoteAddress}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request method: ${req.method}\n`);

    switch (url.pathname) {
        case "/GET":
            handleGet(req, res);
            break;
        case "/POST":
            handlePost(req, res);
            break;
        case "/PUT":
            handlePut(req, res);
        case "/DELETE":
            handleDelete(req, res);
        default:
            handleGet(req, res);
            break;
    }
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})