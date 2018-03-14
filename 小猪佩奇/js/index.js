$(function() {
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();
	var t4 = new TimelineMax();
	var t5 = new TimelineMax();
	var t6 = new TimelineMax();
	var t7 = new TimelineMax();
	var t8 = new TimelineMax();
	// 太阳
	t1.to(sun,10,{
		rotation:'360deg',
		ease: Linear.easeIn,
	});
	// 猪爸妈前进
	t.from('#zba',4,{
		left:'-15rem',
	})
	.fromTo(homeStart,1,{
		opacity: 0,
	},{
		opacity: 1,
	})
	.from('#zma',4,{left:'-10rem'},0);

	// 猪左脚
	t3.from('#zba_fl',1,{
		rotation:'-30deg',
		ease:Linear.easeIn,
	})
	.to('#zba_fl',1,{
		rotation:'-30deg',
		ease:Linear.easeIn,
	})
	.to('#zma_fl',1,{
		rotation:'-30deg',
		ease:Linear.easeIn,
	},0)
	.to('#zma_fl',1,{
		rotation:'0deg',
		ease:Linear.easeIn,
	},'-=1');

	// 猪右脚
	t4.from('#zba_fr',1,{
		rotation:'30deg',
		ease:Linear.easeIn,
	})
	.to('#zba_fr',1,{
		rotation:'30deg',
		ease:Linear.easeIn,
	})
	.to('#zma_fr',1,{
		rotation:'50deg',
		ease:Linear.easeIn,
	},0)
	.to('#zma_fr',1,{
		rotation:'0deg',
		ease:Linear.easeIn,
	},'-=2');

	// 小猪跳跃
	t5.staggerTo('#zsi',1,{
		cycle: {
			bezier: function() {
				return [
					{x:0,y:0},
					{x:50,y:-100},	
					{x:130,y:0},
				]
			}
		},
		ease:Ease.easeIn,		
	})
	.staggerTo('#zsi',1,{
		cycle: {
			bezier: function() {
				return [
					{x:130,y:0},
					{x:210,y:-100},
					{x:290,y:0},
				]
			}
		},
		ease:Ease.easeIn,
	});
	// 猪弟弟跳跃
	t6.staggerTo('#zbo',1,{
		cycle: {
			bezier: function() {
				return [
					{x:0,y:0},
					{x:100,y:-100},	
					{x:180,y:0},
				]
			}
		},
		ease:Ease.easeIn,		
	})
	.staggerTo('#zbo',1,{
		cycle: {
			bezier: function() {
				return [
					{x:180,y:0},
					{x:260,y:-100},
					{x:350,y:0},
				]
			}
		},
		ease:Ease.easeIn,
	})

	t1.repeat(-1);
	t2.repeat(1);
	t3.repeat(1);
	t4.repeat(1);
	t7.repeat(1);
	t8.repeat(1);
});

var homeStart = $('#homePageStart');
var zba = $('#zba');
var zma = $('#zma');
var zsi = $('#zsi');
var zbo = $('#zbo');
var sun = $('.sun');
// console.log(sun);

homeStart.on('click', function() {
	// console.log(zba);
});