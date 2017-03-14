'use strict'

const request = require('request-promise');
const ToDo = require('./model');

const seed = () => {
  request('https://mysafeinfo.com/api/data?list=todos&format=json')
    .then(res => JSON.parse(res))
    .then((res) => {
      const data = res.map((r) => {
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
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

module.exports = seed;
