const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: String,
    category: String,
    description: String,
    status: String
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;