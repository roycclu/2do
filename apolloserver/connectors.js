'use strict'

const ToDoModel = require('./model')

class ToDo {
  constructor() {
    this.findToDo = (index) => {
      const todo = ToDoModel.findOne({ index }, (error, data) => {
        return data;
      });
      return todo;
    };
  }
}
module.exports = { ToDo };
