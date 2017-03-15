'use strict'

const ToDoModel = require('./model')

class ToDo {
  constructor() {
    this.findToDo = (index) => {
      const todo = ToDoModel.findOne({ index }, (error, data) => {
        console.log('found: ',data);
        return data;
      });
      return todo;
    };
    this.findToDos = () => {
      const todos = ToDoModel.find({}).sort({index: -1}).exec((error, data) => {
        console.log('found: ',data);
        return data;
      });
      return todos;
    };
    this.addToDo = (owner, text, due) => {
      // const index = ToDoModel.
      const entry = {owner: owner, text: text, index: 5, due: due, done: false}
      const todo = new ToDoModel(entry);
      todo.save((err, item) => {
        console.log('saved: ', item)
        return todo;
      });
      return todo;
    };
    this.checktodo = (index) => {

    };
    this.deletetodo = (index) => {
      const todo = ToDoModel.remove({ index: index }, (error) => {
        console.log('deleted: ', index)
        return index;
      });
      return todo
    };
  }
}
module.exports = { ToDo };
