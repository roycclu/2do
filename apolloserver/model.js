'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment')

var db = Mongoose.createConnection('mongodb://localhost/apollo', (err) => {
  if (err) {
    return err;
  }
  return true;
});

const CounterSchema = new Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});

const CounterModel = db.model('Counter', CounterSchema);

const ToDoSchema = new Schema({
  index: Number,
  owner: String,
  text: String,
  due: String,
  done: Boolean
});

autoIncrement.initialize(db);

ToDoSchema.plugin(autoIncrement.plugin, { model: 'ToDo', field: 'index' })

const ToDoModel = db.model('ToDo', ToDoSchema);

module.exports = ToDoModel;
