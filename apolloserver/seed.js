'use strict'

// const request = require('request-promise');
const ToDoModel = require('./model');

const initial = [
  {
    "ow": "Luke Skywalker",
    "tt": "create a new 2do",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  },
  {
    "ow": "Denny Hsieh",
    "tt": "check off the first 2do",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  },
  {
    "ow": "Luke Skywalker",
    "tt": "check off this 2do",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  },
  {
    "ow": "Denny Hsieh",
    "tt": "delete this 2do by sliding to the right",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  }
]

const fill = () => {
  const data = initial.map((r) => {
    const obj = {};
    obj.owner = r.ow;
    obj.text = r.tt;
    obj.due = r.du;
    obj.done = r.dn;
    return obj;
  });
  data.forEach((entry) => {
    const todo = new ToDoModel(entry);
    todo.save((err, item) => {
      console.log('saved:', item)
    });
  });
}

const seed = () => {
    ToDoModel.remove({}, () => {
      console.log('removing todos')
      fill();
    })
    // (function(todomodel){
    //   todomodel.remove({}, () => {
    //     console.log('removing todos')
    //     fill();
    //   })
    // }(ToDoModel))
};

module.exports = seed;
