
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

// console.log(zbo);

var expressPage = $('#expressPage');
var homePage = $('#homePage');
var clickPage = $('#clickPage');

homeStart.on('click', function() {
	var box = $('#box');
	var well = $('#well');
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();

	// console.log(homePage,expressPage);
	homePage.css('display','none');
	expressPage.css('display','block');

	// 斑马前进 3.2s
	t.from(box,3.2,{
		x: -10*fs,
		ease: Linear.easeIn,
	})
	.from('#zeb',3.2,{
		x: -10*fs,
		ease: Linear.easeIn,
	},0)
	// 斑马行走
	t1.to('#zeb_fl',.8,{
		x : .8*fs,
		rotation:'-20deg',
	})
	.to('#zeb_fr',.8,{
		x : -1*fs,
		rotation:'20deg',
	},0)
	.to('#zeb_fl',.8,{
		x : 0*fs,
		rotation:'0deg',
	})
	.to('#zeb_fr',.8,{
		x : 0,
		rotation:'0deg',
	},'-=1')

	t1.repeat(1);

	// 斑马放下快递 3.2+1.5s
	// 弯腰
	t2.to('#zeb_bd',1,{
		rotation:'30deg',
	},'+=3.2')
	.to('#zeb_hl',1,{
		x: .5*fs,
		y: .5*fs,
	},'-=1')
	.to('#zeb_hr',1,{
		x: .5*fs,
		y: .5*fs,
	},'-=1')
	.to(box,1,{
		x: .5*fs,
		y: .5*fs,
	},'-=1')
	.to(box,.5,{
		y: 1*fs,
	})
	// 直腰 3.2+1.5+1s
	.to('#zeb_bd',1,{
		rotation:'0deg',
	})
	.to('#zeb_hl',1,{
		x: 0,
		y: 0,
	},'-=1')
	.to('#zeb_hr',1,{
		x: 0,
		y: 0,
	},'-=1')


	//斑马离开 3.2+1.5+1+3.2 = 8.9s
	// 转身
	.set('#zeb_hr',{
		display: 'none',
	})	
	.set('#zeb',{
		rotationY: 180,
	})	
	.to('#zeb',3.2,{
		x: -10*fs,
	})
	// 走开
	t3.to('#zeb_fl',.8,{
		x : .8*fs,
		rotation:'-20deg',
	},'+=5.7')
	.to('#zeb_fr',.8,{
		x : -1*fs,
		rotation:'20deg',
	},'-=.8')
	.to('#zeb_fl',.8,{
		x : 0*fs,
		rotation:'0deg',
	})
	.to('#zeb_fr',.8,{
		x : 0,
		rotation:'0deg',
	},'-=.8')
	.set(expressPage,{
		display: 'none',
	})
	.set(clickPage,{
		display: 'block',
		onComplete:function () {
			clickBox();
		}
	})

});

var btnBox = $('#btnBox');

function clickBox() {
	btnBox.css('display','none');
	box2.css('display','none');
	well.css('display','block');
}