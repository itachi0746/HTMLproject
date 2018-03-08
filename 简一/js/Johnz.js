
// 根据id获取元素
function $(id) {
	var ID = document.getElementById(id);
	return ID;
}

// 根据class获取元素
function $cls(cls) {
	var result = document.getElementsByClassName(cls);
	return result;
}

// 产生max,min之间的随机数
function _random(min,max) {
	max++;
	var a = Math.floor(Math.random()*(max-min)+min);
	return a;
}

// 判断元素是否有某个类
function hasClass( elements,cName ){ 
  return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
}

// 增加类
function addClass( elements,cName ){ 
  if( !hasClass( elements,cName ) ){ 
    elements.className += " " + cName; 
  }
}

// 去除类
function removeClass( elements,cName ){ 
  if( hasClass( elements,cName ) ){ 
    elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
  }
}