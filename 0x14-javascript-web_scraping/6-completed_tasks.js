#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, { json: true }, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const completedTask = {};
  body.forEach((todo) => {
    if (todo.completed) {
      if (!completedTask[todo.userId]) {
        completedTask[todo.userId] = 1;
      } else {
        completedTask[todo.userId] += 1;
      }
    }
  });

  console.log(completedTask);
});
