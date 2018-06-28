var mySwiper = new Swiper('.swiper-container',{
	on: {
		slideChange: function() {
			if(this.activeIndex===0) {
				first();
			}
		}
	},
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    noSwiping: true,
	noSwipingClass : 'stop-swiping',
	initialSlide : 0,

})
var mySwiperW = mySwiper.width;
var mySwiperH = mySwiper.height;
console.log(mySwiperW,mySwiperH);
var t = new TimelineMax();

function first() {
	t.from('.pic1',1,{
		x: mySwiperW
	});
	t.from('.pic2',1,{
		x: mySwiperW
	},'-=0.5');

}
first();


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

