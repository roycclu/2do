'use strict'

const Mongoose = require('mongoose');

const PresidentSchema = Mongoose.Schema({
  name: String,
  party: String,
  term: String
});

const ToDoSchema = Mongoose.Schema({
  id: String,
  owner: String,
  text: String,
  done: Boolean
});

const President = Mongoose.model('President', PresidentSchema);
const ToDo = Mongoose.model('ToDo', ToDoSchema);

// module.exports = President;
module.exports = ToDo;
