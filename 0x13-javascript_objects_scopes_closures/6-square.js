#!/usr/bin/node
/**
 * Square class that inherits from last square class
 *   */
const lastSquare = require('./5-square');

class Square extends lastSquare {
  charPrint (c) {
    const myChar = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i++) {
      let myVar = '';
      let y = 0;
      while (y < this.width) {
        myVar += myChar;
        y++;
      }
      console.log(myVar);
    }
  }
}

module.exports = Square;
