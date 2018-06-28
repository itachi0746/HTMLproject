function changestyle() {
    var obj = document.getElementsByClassName('p3-part2')[0],
        obj2 = document.getElementsByClassName('p3-part3')[0];
    obj.className = 'btn_go_left';
    obj2.className = 'btn_go_right';
}

function hide() {
	var obj = document.getElementsByClassName('play')[0];
	obj.setAttribute('style', 'display:none;');
}