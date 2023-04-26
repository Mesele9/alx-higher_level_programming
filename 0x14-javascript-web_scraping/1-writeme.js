#!/usr/bin/node

const fs = require('fs');
const file = process.argv[2];
const strContent = process.argv[3];

fs.writeFile(file, strContent, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});
