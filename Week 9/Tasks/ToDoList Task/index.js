const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const toDoRouter = require ('./route/toDo-router');
const PORT = process.env.PORT || 3000;
const DATABASE = 'test';
const DB_URI = `mongodb://localhost:27017/${DATABASE}`;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/toDo', toDoRouter);


app.use(function (error,req,res,next) {
    if (error.name === 'ValidationError') error.statusCode = 400;

    res.status(error.statusCode || 500)
        .send(error.message || 'Something went wrong...');
});

function main() {
    mongoose.connect(DB_URI, {}, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Connected to database');
            
            app.listen(PORT, () => console.log('Up and crawling'));
        }
    })
}

main();