'use strict'

const ToDoModel = require('./model')

class ToDo {
  constructor() {
    this.findToDo = (id) => {
      const todo = ToDoModel.findOne({ id }, (error, data) => {
        return data;
      });
      return todo;
    };
  }
}
module.exports = { ToDo };
