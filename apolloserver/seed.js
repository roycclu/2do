'use strict'

// const request = require('request-promise');
const ToDoModel = require('./model');

const initial = [
  {
    "ow": "Luke Skywalker",
    "tt": "创一个你的需完成事项",
    "du": "2017-03-20T02:40:51.699Z",
    "cm": false
  },
  {
    "ow": "Denny Hsieh",
    "tt": "点选下方图像切换页面",
    "du": "2017-03-20T02:40:51.699Z",
    "cm": false
  },
  {
    "ow": "Luke Skywalker",
    "tt": "滑动这个项目以删除",
    "du": "2017-03-20T02:40:51.699Z",
    "cm": false
  },
  {
    "ow": "Denny Hsieh",
    "tt": "勾选这个项目，确认事情完成",
    "du": "2017-03-20T02:40:51.699Z",
    "cm": false
  }
]

const fill = () => {
  const data = initial.map((r) => {
    const obj = {};
    obj.owner = r.ow;
    obj.text = r.tt;
    obj.due = r.du;
    obj.complete = r.cm;
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
