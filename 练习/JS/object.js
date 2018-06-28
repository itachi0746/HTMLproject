var o = {
	name: 'john',
	weight: 1.70,
	birth: 1999
};
var s = 'string';
var n = 1234;

console.log(o.hasOwnProperty('num'));  //对象是否有某属性
console.log(o.constructor());  //对象的构造方法
console.log(o.propertyIsEnumerable('name'));
console.log(o.toLocaleString());
console.log(o.toString());
console.log(o.valueOf());

console.log(s.valueOf(), typeof s.valueOf());
console.log(n.valueOf(), typeof n.valueOf());