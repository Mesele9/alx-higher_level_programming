#!/usr/bin/node
/**
 * Rectangle class with check for the attributes
 */
class Rectangle {
  constructor (w, h) {
    if ((w > 0 && typeof (w) === 'number') && (h > 0 && typeof (h) === 'number')) {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
