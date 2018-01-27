// 修改属性默认的特性

var person = {};
// 定义属性
// Object.defineProperty(person,'name',{
// 	writable:false,  // 不可修改 只读
// 	value: 'Nicholas'  
// });

// console.log(person.name);
// person.name = 'Greg';
// console.log(person.name);

console.log('--------------------------------------------');

// 一旦把属性定义为不可配置的,就不能把他变回可配置
Object.defineProperty(person, 'name', {
	configurable: false,  // 不可配置(不能delete),
	value: 'Nnnnn'
});

console.log(person.name);
delete person.name
console.log(person.name);

