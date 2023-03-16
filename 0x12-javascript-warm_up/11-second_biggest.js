#!/usr/bin/node

const args = process.argv.length;
const array = [];
if (args <= 3) {
  console.log(0);
} else {
  for (let i = 2; i < args; i++) {
    array.push(parseInt(process.argv[i]));
  }
  array.sort(function (a, b) { return b - a; });
  console.log(array[1]);
}
