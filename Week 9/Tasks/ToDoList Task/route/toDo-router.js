const express = require('express');
const { request } = require('http');
const ToDo = require('../model/ToDo');

// we are defining router level middleware, so we need a Router object
const router = express.Router();

// express passes in the request and response objects for us
router.get('/getAll', async (req, res) => {
    res.contentType('application/json') // contentType is a shortcut provided by Express for creating the 'Content-type': 'value' header
        .status(200)
        .json(await ToDo.find()); // converts objects to JSON and puts it in the response body
});

router.get('/getById/:id', async (req, res, next) => {
    const id = req.params.id;

    const toDo = await ToDo.findById(id);

    if (toDo) {
        res.status(200).json(toDo);
    } else {
        next({ statusCode: 404, message: `ToDo with id ${id} does not exist`});
    }
});

router.post('/create', async (req, res, next) => {
    // data parsed into the request.body object can be accessed anywhere we have access to the request object
    // - we must use express.json() or body-parser() middleware
    if (Object.keys(req.body).length == 0) return next({
        statusCode: 400, 
        message: 'Body cannot be empty'});

    const toDo = new ToDo(req.body);
    await toDo.save(); // equivalent to insertOne(())

    res.status(201).json(ToDo);
});

router.put('/update/:id', async (req, res, next) => {
    // make sure req.body is not empty
    if (Object.keys(req.body).length == 0) return next({
        statusCode: 400, 
        message: 'Body cannot be empty'});
    
    const toDo = await ToDo.updateOne({ _id: req.params.id }, req.body);
    // when we find a resource in the db using .find(), it is tracked by Mongoose and that is why we can change the toDo objects fields and then save them as updates

    if (toDo) {
        res.status(200).json(await ToDo.findById(req.params.id));
    } else {
        next({ statusCode: 400, message: `ToDo with id ${req.params.id} does not exist`});
    }
});

router.delete('/delete/:id', async (req, res, next) => {
    // a colon followed by a name in a path is path parameter that can be accessed on the request.params object
    const id = req.params.id;

    const toDo = await ToDo.findByIdAndDelete(id);

    if (toDo) {
        res.status(200).json(toDo);
    } else {
        next({ statusCode: 404, message: `ToDo with id ${id} does not exist`});
    }
});

module.exports = router;