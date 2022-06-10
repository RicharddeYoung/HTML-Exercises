const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const toDoRouter = require ('./route/toDo-router');
const PORT = process.env.PORT || 3000; // id process.env.PORT is not undefined or null, it will be assigned to PORT otherwise, port 3000 is assigned instead
const DATABASE = 'test';
const DB_URI = `mongodb://localhost:27017/${DATABASE}`;

const app = express();


// app.use allows middleware to be mounted to the application server
// - morgan() returns a middleware function when called
app.use(morgan('dev'));
app.use(express.json()); // built-in middleware for parsing JSON data in the response.body
app.use('/toDo', toDoRouter);

// error handling middleware
// - first param is always the error
app.use(function (error,req,res,next) {
    res.status(error.statusCode || 500)
        .send(error.message || 'Something went wrong...');
});

function main() {
    mongoose.connect(DB_URI, {}, (err) => {
        if (err) {
            throw err; // handle error
        } else {
            console.log('Connected to database');
            
            app.listen(PORT, () => console.log('Up and crawling'));
        }
    })
}

main();