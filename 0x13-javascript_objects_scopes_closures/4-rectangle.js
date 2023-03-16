#!/usr/bin/node
/**
 * a rectangle class with print, rotate and double method
 */
class Rectangle {
  constructor (w, h) {
    if (w < 0 || h < 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {};
    }
    this.width = w;
    this.height = h;
  }

  print () {
    let row = '';
    for (let i = 0; i < this.width; i++) {
      row += 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }

  rotate () {
    let t = 0;
    t = this.width;
    this.width = this.height;
    this.height = t;
  }
}

module.exports = Rectangle;
