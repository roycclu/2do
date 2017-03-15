'use strict'

const Mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment')
//
// var connection = Mongoose.createConnection('mongodb://localhost/apollo', (err) => {
//   if (err) {
//     return err;
//   }
//   return true;
// });



const CounterSchema = Mongoose.Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});

const CounterModel = Mongoose.model('Counter', CounterSchema);

const ToDoSchema = Mongoose.Schema({
  index: Number,
  owner: String,
  text: String,
  due: String,
  done: Boolean
});

ToDoSchema.pre('save', (next) => {
  var doc = this;
  CounterModel.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, (error, counter) => {
    if (error) return next(error);
    doc.index = CounterModel.seq;
    next();
  });
})

// autoIncrement.initialize(connection);
//
// ToDoSchema.plugin(autoIncrement.plugin, 'ToDo')

const ToDoModel = Mongoose.model('ToDo', ToDoSchema);

module.exports = ToDoModel;
