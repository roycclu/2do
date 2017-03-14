'use strict'

const ToDoModel = require('./model')

class ToDo {
  constructor() {
    this.findToDo = (index) => {
      const todo = ToDoModel.findOne({ index }, (error, data) => {
        console.log('data: ',data);
        return data;
      });
      // console.log('todo: ',todo)
      return todo;
    };
    this.findToDos = () => {
      const todos = ToDoModel.find({}).sort({index: -1}).exec((error, data) => {
        console.log('data: ',data);
        return data;
      });
      // console.log('todos: ',todos)
      return todos;
    }
  }
}
module.exports = { ToDo };
