'use strict'

const request = require('request-promise');
const ToDo = require('./model');

const initial = [
  {
    "ix": 1,
    "ow": "Luke Skywalker",
    "tt": "create a new ToDo",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  },
  {
    "ix": 2,
    "ow": "Denny Hsieh",
    "tt": "check off the first ToDo",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  },
  {
    "ix": 3,
    "ow": "Luke Skywalker",
    "tt": "create another ToDo",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  },
  {
    "ix": 4,
    "ow": "Denny Hsieh",
    "tt": "delete the new ToDo by sliding to the right",
    "du": "2016-06-20T02:40:51.699Z",
    "dn": false
  }
]

const seed = () => {
    const data = initial.map((r) => {
      const obj = {};
      obj.index = r.ix;
      obj.owner = r.ow;
      obj.text = r.tt;
      obj.due = r.du;
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
