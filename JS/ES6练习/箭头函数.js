/*jshint esversion: 6 */


// var arr = [10, 20, 1, 2];


// console.log(arr.sort((x,y) => y-x));
var fn = x => x * x;
console.log(fn(2));



var obj = {
  birth: 1990,
  getAge: function () {
      var b = this.birth; // 1990
      var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
      return fn();
  }
};
var a = obj.getAge(); // 25
console.log(a);

const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}

