/*jshint esversion: 6 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

// console.log(typeof Point);

var b = new Point();
console.log(b.toString());

