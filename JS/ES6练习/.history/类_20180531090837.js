/*jshint esversion: 6 */

// constructor方法是类的默认方法，通过new命令生成对象实例时，
// 自动调用该方法。一个类必须有constructor方法，如果没有显式定义，
// 一个空的constructor方法会被默认添加。

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
// ==================================================

//与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上）
//，否则都是定义在原型上（即定义在class上
var b = new Point(1,2);
// console.log(b.toString());
// console.log(b.hasOwnProperty('x'));
// console.log(b.hasOwnProperty('toString'));
// console.log(b.__proto__.hasOwnProperty('toString'));
// ==================================================


// 可以使用 Object.getPrototypeOf 方法
// 来获取实例对象的原型，然后再来为原型添加方法/属性
var a = Object.getPrototypeOf(b);
console.log(a);
a.printName = function () {  
  console.log('Oops');
  
};
