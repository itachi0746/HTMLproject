
// 计算出根元素的font-size
var cw = document.documentElement.clientWidth;
var fs =  40* (cw / 750);

var homeStart = $('#homePageStart');
var zba = $('#zba');
var zma = $('#zma');
var zsi = $('#zsi');
var zbo = $('#zbo');
var sun = $('.sun');
// console.log(sun);


// ready事件(首页的动画)
// $(function() {
// 	var t = new TimelineMax();
// 	var t1 = new TimelineMax();
// 	var t2 = new TimelineMax();
// 	var t3 = new TimelineMax();
// 	var t4 = new TimelineMax();
// 	var t5 = new TimelineMax();
// 	var t6 = new TimelineMax();

// 	// 太阳
// 	t1.to(sun,10,{
// 		rotation:'360deg',
// 		ease: Linear.easeIn,
// 	});
// 	// 猪爸妈前进
// 	t.from(zba,4,{
// 		x:-15*fs,
// 		ease: Linear.easeIn,
// 	})
// 	.fromTo(homeStart,1,{
// 		opacity: 0,
// 	},{
// 		opacity: 1,
// 	})
// 	.from(zma,4,{
// 		x:-15*fs,
// 		ease: Linear.easeIn,
// 	},0);

// 	// 猪姐弟前进
// 	t2.from(zsi,4.2,{
// 		x:-18*fs,
// 		ease: Linear.easeIn,
// 	})
// 	.from(zbo,4.2,{
// 		x:-18*fs,
// 		ease: Linear.easeIn,
// 	},0);

// 	// 猪左脚
// 	t3.to('#zba_fl',1,{
// 		x : 1.5*fs,
// 		rotation : '-30deg',
// 		ease : Linear.easeIn,
// 	})
// 	.to('#zba_fl',1,{
// 		x : 0,
// 		rotation :'0deg',
// 		ease :Linear.easeIn,
// 	})
// 	.to('#zma_fl',1,{
// 		x : 1.5*fs,
// 		rotation:'-30deg',
// 		ease:Linear.easeIn,
// 	},0)
// 	.to('#zma_fl',1,{
// 		x : 0,
// 		rotation:'0deg',
// 		ease:Linear.easeIn,
// 	},'-=1');

// 	// 猪右脚
// 	t4.to('#zba_fr',1,{
// 		x : -1.5*fs,
// 		rotation : '30deg',
// 		ease : Linear.easeIn,
// 	})
// 	.to('#zba_fr',1,{
// 		x : 0,
// 		rotation:'0deg',
// 		ease:Linear.easeIn,
// 	})
// 	.to('#zma_fr',1,{
// 		x : -1.5*fs,
// 		rotation:'30deg',
// 		ease:Linear.easeIn,
// 	},0)
// 	.to('#zma_fr',1,{
// 		x : 0,
// 		rotation:'0deg',
// 		ease:Linear.easeIn,
// 	},'-=1');

// 	// 猪姐姐跳跃,时长1.4s
// 	t5.to('#zsi_fl',.2,{
// 		x : 1.5*fs,
// 		rotation:'-30deg',

// 	})
// 	.to('#zsi_fr',.2,{
// 		x : -1.5*fs,
// 		rotation:'30deg',
// 	},0)

// 	.to(zsi,.3,{
// 		y:-1.5*fs,
// 		ease: Circ.easeOut,
// 	},'-=.1')
// 	.to(zsi,.3,{
// 		y:0,
// 		ease: Circ.easeIn,
// 	})

// 	.to('#zsi_fl',.2,{
// 		x : 0*fs,
// 		rotation:'0deg',
// 	})
// 	.to('#zsi_fr',.2,{
// 		x : 0,
// 		rotation:'0deg',
// 	},'-=.2')

// 	.to(zsi,.3,{
// 		y:-1.5*fs,
// 		ease: Circ.easeOut,
// 	},'-=.1')
// 	.to(zsi,.3,{
// 		y:0,
// 		ease: Circ.easeIn,
// 	});
// 	t5.repeat(2);

// 	// 猪弟弟跳跃,时长1.4s
// 	t6.to('#zbo_fl',.2,{
// 		x : .5*fs,
// 		rotation:'-30deg',
		
// 	})
// 	.to('#zbo_fr',.2,{
// 		x : -.6*fs,
// 		rotation:'30deg',
// 	},0)

// 	.to(zbo,.3,{
// 		y:-1.5*fs,
// 		ease: Circ.easeOut,
// 	},'-=.1')
// 	.to(zbo,.3,{
// 		y:0,
// 		ease: Circ.easeIn,
// 	})

// 	.to('#zbo_fl',.2,{
// 		x : 0*fs,
// 		rotation:'0deg',
// 	})
// 	.to('#zbo_fr',.2,{
// 		x : 0,
// 		rotation:'0deg',
// 	},'-=.2')

// 	.to(zbo,.3,{
// 		y:-1.5*fs,
// 		ease: Circ.easeOut,
// 	},'-=.1')
// 	.to(zbo,.3,{
// 		y:0,
// 		ease: Circ.easeIn,
// 	});
// 	t6.repeat(2);

// 	t1.repeat(-1);
// 	t3.repeat(1);
// 	t4.repeat(1);

// });

console.log(zbo);


homeStart.on('click', function() {
	// console.log(zba);
});