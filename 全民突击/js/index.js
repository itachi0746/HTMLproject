var mySwiper = new Swiper('.swiper-container',{
	on:{
		init: function(){
			swiperAnimateCache(this); //隐藏动画元素 
			swiperAnimate(this); //初始化完成开始动画
		}, 
		slideChangeTransitionEnd: function(){ 
			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			if(this.activeIndex==2) {
				// p3瞄准
				P3_target.className = 'p3-target';
				// 电池
				setTimeout(function() {
					Meidian.className = 'meidian2-after';
				},5000)
			} else {
				P3_target.className = 'none';
				Meidian.className = 'ani infinite meidian2-before';				
			}

			if(this.activeIndex==3) {
				// p4瞄准
				P4_target.className = 'p4-target';
				P4_zhujue.className = 'zhujue';
			}else {
				P4_target.className = 'none';
				P4_zhujue.className = 'zhujue-after';
			}

			if(this.activeIndex==4) {
				// p5瞄准
				P5_target_one.className = 'ani p5-target-one';
				P5_target_two.className = 'ani p5-target-two';
				P5_target_three.className = 'ani p5-target-three';
				P5_tuanmie.className = 'ani tuanmie';
				P5_font1.className = 'ani p5-font1';
			} else {
				P5_target_one.className = 'ani';
				P5_target_two.className = 'ani';
				P5_target_three.className = 'ani';	
				P5_tuanmie.className = 'ani';
				P5_font1.className = 'ani';
			}

			if(this.activeIndex==5) {
				// p6瞄准
				P6_target.className = 'ani p6-target';
				P6_flash.className = 'ani p6-flash';
			} else {
				P6_target.className = 'ani';
				P6_flash.className = 'ani';
			}

			if(this.activeIndex==6) {
				P7_hot.className = 'ani p7-hot';
				P7_fire.className = 'ani p7-fire';
				setTimeout(function() {
					P7_hot.className = 'ani';
					P7_hot.style.opacity = '1';
				},3000);
				setTimeout(function() {
					P7_fire.className = 'ani';
					P7_fire.style.opacity = '1';
				},3500)

			} else {
				P7_hot.className = 'ani';
				P7_fire.className = 'ani';
			}

		},
	},
		simulateTouch: false,//禁止鼠标模拟
		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

})
var Meidian = $('meidian2'),
	P3_target = $('p3-target'),
	P4_target = $('target'),
	P4_zhujue = $('zhujue'),
	P5_target_one = $('target-one'),
	P5_target_two = $('target-two'),
	P5_target_three = $('target-three'),
	P5_tuanmie = $('tuanmie'),
	P5_font1 = $('p5-font1'),
	P6_target = $('p6-target'),
	P6_flash = $('p6-flash'),
	P7_hot = $('p7-hot'),
	P7_fire = $('p7-fire');


// var a = $('kadun');
// a.addClass('shake');
// console.log(mySwiper);

