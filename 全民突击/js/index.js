var mySwiper = new Swiper('.swiper-container',{
	on:{
		init: function(){
			swiperAnimateCache(this); //隐藏动画元素 
			swiperAnimate(this); //初始化完成开始动画
		}, 
		slideChangeTransitionEnd: function(){ 
			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			if(this.activeIndex==2) {
				var Dianchi = $('dianchi');
				console.log(Dianchi.className);
				setTimeout(function() {
					Dianchi.className = 'none';
					console.log(Dianchi.className);
				},2000)
			}
				// console.log(a);

			
		},
	},

		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

})
// var a = $('kadun');
// a.addClass('shake');
// console.log(mySwiper);

