#!/usr/bin/node

const fs = require('fs');
const file = process.argv[2];
const strContent = process.argv[3];

fs.writeFile(file, strContent, 'utf-8', (err) => {
  if (err) {
    console.log(error);
    return;
  }
});
