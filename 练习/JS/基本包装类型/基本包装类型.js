// var s1 = ['some'];
// var s2 = s1.substring(2);
// console.log(s2);

// var s3 = new Array('some');

// console.log(s1==s3);


// 每当读取一个基本类型值,后台就会创建一个对应的
// 基本包装类型对象,从而能调用一些方法来操作这些数据
var s1 = 'some text';

// 自动创建的基本包装类型对象,只存在这行代码执行的瞬间
s1.color = 'red';


console.log(s1.color);  // undefined
