/*jshint esversion: 6 */


// let所声明的变量，只在let命令所在的代码块内有效。
var a = [];
for(var i=0;i<10;i++) { 
  a[i] = function () {  
    console.log(i);
    
  };
}
// a[6]();


// 变量i是let声明的，当前的i只在本轮循环有效，
// 所以每一次循环的i其实都是一个新的变量，所以最后输出的是6
var b = [];
for (let i = 0; i < 10; i++) {
  b[i] = function () {  
    console.log(i);
    
  };
  
}

// b[6]();

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

f1();