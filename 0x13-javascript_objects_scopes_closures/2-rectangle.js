#!/usr/bin/node
/**
 * Rectangle class with check for the attributes
 */
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || !(w) || !(h)) {
      return {};
    }
    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
