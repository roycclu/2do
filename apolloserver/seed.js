'use strict'

const request = require('request-promise');
const ToDo = require('./model');

const initial = [
  {
    "id": 1,
    "ow": "Luke Skywalker",
    "tt": "create a new ToDo",
    "dn": false
  },
  {
    "id": 2,
    "ow": "Denny Hsieh",
    "tt": "check off the first ToDo",
    "dn": false
  },
  {
    "id": 3,
    "ow": "Luke Skywalker",
    "tt": "create another ToDo",
    "dn": false
  },
  {
    "id": 4,
    "ow": "Denny Hsieh",
    "tt": "delete the new ToDo by sliding to the right",
    "dn": false
  }
]

const seed = () => {
    const data = initial.map((r) => {
      const obj = {};
      obj.id = r.id;
      obj.owner = r.ow;
      obj.text = r.tt;
      obj.done = r.dn;
      return obj;
    });
    data.forEach((d) => {
      const todo = new ToDo(d);
      todo.save((err, item) => {
        console.log('saved:', item)
      });
    });
};

module.exports = seed;
