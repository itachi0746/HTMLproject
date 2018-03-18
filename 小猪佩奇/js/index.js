
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
$(function() {
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();
	var t4 = new TimelineMax();
	var t5 = new TimelineMax();
	var t6 = new TimelineMax();
	var t7 = new TimelineMax();

	// 太阳
	t1.to(sun,10,{
		rotation:'360deg',
		ease: Linear.easeIn,
	});

	t1.repeat(-1);

	// 猪爸妈前进
	t.from(zba,4,{
		x:-15*fs,
		ease: Linear.easeIn,
	})
	.fromTo(homeStart,1,{
		y: 10*fs,
	},{
		y: 0,
		ease: Back.easeOut,
		onComplete: function() {
			// 开始按钮出现
			t7.to(homeStart,2,{
				scale: .8,
				ease: Linear.easeIn,
			},'+=.3')
			.to(homeStart,2,{
				scale: 1,
				ease: Linear.easeIn,
			});	
			t7.repeat(-1);
		
		}		
	})
	.from(zma,4,{
		x:-15*fs,
		ease: Linear.easeIn,
	},0);

	// 猪姐弟前进
	t2.from(zsi,4.2,{
		x:-18*fs,
		ease: Linear.easeIn,
	})
	.from(zbo,4.2,{
		x:-18*fs,
		ease: Linear.easeIn,

	},0);

	// 猪左脚
	t3.to('#zba_fl',1,{
		x : 1.5*fs,
		rotation : '-30deg',
		ease : Linear.easeIn,
	})
	.to('#zba_fl',1,{
		x : 0,
		rotation :'0deg',
		ease :Linear.easeIn,
	})
	.to('#zma_fl',1,{
		x : 1.5*fs,
		rotation:'-30deg',
		ease:Linear.easeIn,
	},0)
	.to('#zma_fl',1,{
		x : 0,
		rotation:'0deg',
		ease:Linear.easeIn,
	},'-=1');

	// 猪右脚
	t4.to('#zba_fr',1,{
		x : -1.5*fs,
		rotation : '30deg',
		ease : Linear.easeIn,
	})
	.to('#zba_fr',1,{
		x : 0,
		rotation:'0deg',
		ease:Linear.easeIn,
	})
	.to('#zma_fr',1,{
		x : -1.5*fs,
		rotation:'30deg',
		ease:Linear.easeIn,
	},0)
	.to('#zma_fr',1,{
		x : 0,
		rotation:'0deg',
		ease:Linear.easeIn,
	},'-=1');

	// 猪姐姐跳跃,时长1.4s
	t5.to('#zsi_fl',.2,{
		x : 1.5*fs,
		rotation:'-30deg',

	})
	.to('#zsi_fr',.2,{
		x : -1.5*fs,
		rotation:'30deg',
	},0)

	.to(zsi,.3,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zsi,.3,{
		y:0,
		ease: Circ.easeIn,
	})

	.to('#zsi_fl',.2,{
		x : 0*fs,
		rotation:'0deg',
	})
	.to('#zsi_fr',.2,{
		x : 0,
		rotation:'0deg',
	},'-=.2')

	.to(zsi,.3,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zsi,.3,{
		y:0,
		ease: Circ.easeIn,
	});
	t5.repeat(2);

	// 猪弟弟跳跃,时长1.4s
	t6.to('#zbo_fl',.2,{
		x : .5*fs,
		rotation:'-30deg',
		
	})
	.to('#zbo_fr',.2,{
		x : -.6*fs,
		rotation:'30deg',
	},0)

	.to(zbo,.3,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zbo,.3,{
		y:0,
		ease: Circ.easeIn,
	})

	.to('#zbo_fl',.2,{
		x : 0*fs,
		rotation:'0deg',
	})
	.to('#zbo_fr',.2,{
		x : 0,
		rotation:'0deg',
	},'-=.2')

	.to(zbo,.3,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zbo,.3,{
		y:0,
		ease: Circ.easeIn,
	});
	t6.repeat(2);

	t3.repeat(1);
	t4.repeat(1);

});

// console.log(zbo);

var expressPage = $('#expressPage');
var homePage = $('#homePage');
var clickPage = $('#clickPage');
var wishPage = $('#wishPage');

// 开始按钮点击事件
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

// 点击快递后的操作
function clickBox() {
	var clickDiv = $('.clickDiv');
	var box2 = $('#box2');
	var well = $('#well');

	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();
	var t4 = new TimelineMax();
	// 手指
	t.to(btnBox,1,{
		y: .2*fs,
	})
	.to(btnBox,1,{
		y: 0*fs,
	});
	// 云
	t1.to('.zbaCloud',2,{
		y: .3*fs,
	})
	.to('.zbaCloud',2,{
		y: 0*fs,
	});
	t2.to('.zmaCloud',2,{
		y: .3*fs,
	},'+=1')
	.to('.zmaCloud',2,{
		y: 0*fs,
	});
	t3.to('.zsiCloud',2,{
		y: .3*fs,
	},'-=1')
	.to('.zsiCloud',2,{
		y: 0*fs,
	});
	t4.to('.zboCloud',2,{
		y: .3*fs,
	},'+=1')
	.to('.zboCloud',2,{
		y: 0*fs,
	});

	t.repeat(-1);
	t1.repeat(-1);
	t2.repeat(-1);
	t3.repeat(-1);
	t4.repeat(-1);

	// 点击箱子
	clickDiv.on('click',function() {
		btnBox.css('display','none');
		box2.css('display','none');
		clickDiv.css('display','none');
		well.css('display','block');
		setTimeout(function() {
			clickPage.css('display','none');
			wishPage.css('display','block');
			zboWishStart();
		},1000);
	})
}


var well2 = $('#well2');

// 测试效果函数
// zboWishStart();
// 许愿动画
function broWishStart() {
	var zbo4 = $('#zbo4');
	var zbo5 = $('#zbo5');
	var zboWish = $('#zbo_wish');
	var zboMon = $('#zbo_mon');

	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();
	var t4 = new TimelineMax();

	// 猪弟弟前进
	t.from(zbo4,1.4,{
		x: 7*fs,
		ease: Linear.easeIn,
	})
	// 投币
	.staggerTo(zboMon,1,{
		cycle: {
			bezier: function() {
				return [
					{x:-3*fs,y:-2*fs},
					{x:-5*fs,y:-1.3*fs},
				]
			}
		},
		onComplete: function() {
			zboMon.css('display','none');
			zboWish.css('display','block');
			
			// 井,猪消失
			t2.to(well2,0,{
				display: 'none',
			},'+=1')
			.to(zbo4,0,{
				display: 'none',

				onComplete: function() {
					zbo5.css('display','block');
					// 龙掉下来
					t4.from('#dinosaur',.5,{
						y: -20*fs,
					});
					// 猪手 龙摆动
					t3.to('#dinosaur_wp',.5,{
						rotation: -5,
					})
					.to('#dinosaur_wp',.5,{
						rotation: 0,
					});
					t3.repeat(-1);
					// 点击屏幕  猪弟弟消失
					setTimeout(function() {
						zbo5.css('display','none');
						zsiWishStart();
						t3.stop();
					},2000);
				}
			});

			

		}
	})
	// 猪弟弟跳跃,时长1.4s
	t1.to('.zbo_fl',.2,{
		x : .5*fs,
		rotation:'-30deg',
		
	})
	.to('.zbo_fr',.2,{
		x : -.6*fs,
		rotation:'30deg',
	},0)

	.to(zbo4,.3,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zbo4,.3,{
		y:0,
		ease: Circ.easeIn,
	})

	.to('.zbo_fl',.2,{
		x : 0*fs,
		rotation:'0deg',
	})
	.to('.zbo_fr',.2,{
		x : 0,
		rotation:'0deg',
	},'-=.2')

	.to(zbo4,.3,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zbo4,.3,{
		y:0,
		ease: Circ.easeIn,
	});
	t1.repeat(0);	

}

// zsiWishStart();
// 猪姐姐许愿
function zsiWishStart() {
	var zsi5 = $('#zsi5');
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();

	zsi5.css('display','block');

	t3.to(well2,0,{
		display: 'block',
	});

	// 猪姐姐前进   2s
	t.from(zsi5,2,{
		x: 7*fs,
		ease: Linear.easeIn,
		onComplete: function () {
			// 投币
			t2.staggerTo('#zsi_mon',1,{
				cycle: {
					bezier: function() {
						return [
							{x:-2*fs,y:-2*fs},
							{x:-3*fs,y:-1*fs},
						]
					}
				}
			},'+=1')
			.to('#zsi_mon',0,{
				opacity: 0,
			})			
			.to('#zsi_wish',.5,{
				opacity: 1,
			})
			.to('#zsi5',0,{
				display: 'none',
			},'+=2')
			.to(well2,0,{
				display: 'none',
				onComplete: function() {
					zsiWishGo();
				}
			})

		}
	});

	// 猪姐姐跳跃,时长1s
	t1.to('#zsi_fl5',.2,{
		x : 1.5*fs,
		rotation:'-30deg',
		
	})
	.to('#zsi_fr5',.2,{
		x : -1.5*fs,
		rotation:'20deg',
	},0)

	.to(zsi5,.2,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zsi5,.2,{
		y:0,
		ease: Circ.easeIn,
	})

	.to('#zsi_fl5',.2,{
		x : 0*fs,
		rotation:'0deg',
	})
	.to('#zsi_fr5',.2,{
		x : 0,
		rotation:'0deg',
	},'-=.2')

	.to(zsi5,.2,{
		y:-1.5*fs,
		ease: Circ.easeOut,
	},'-=.1')
	.to(zsi5,.2,{
		y:0,
		ease: Circ.easeIn,
	});
	t1.repeat(1);		
}

// zsiWishGo();
// 姐弟跳泥
function zsiWishGo() {
	var pigPlaying = $('#pigPlaying');
	pigPlaying.css('display','block');

	var zsiNt = $('#zsiNt');
	var zboNt = $('#zboNt');
	var butNt = $('#butNt');

	var t = new TimelineMax();
	var t1 = new TimelineMax();

	// 猪跳跃
	t.to(zsiNt,.5,{
		y: -1*fs,
		ease: Ease.easeOut,

	})
	.to(zsiNt,.5,{
		y: 0*fs,
		ease: Ease.easeOut,

	})
	.to(zboNt,.5,{
		y: -1*fs,
		ease: Ease.easeOut,

	},'-=.5')
	.to(zboNt,.5,{
		y: 0*fs,
		ease: Ease.easeOut,

	});
	// 蝴蝶飞
	t1.staggerTo(butNt,5,{
		cycle: {
			bezier: function() {
				return [
					{x:4*fs,y:-2*fs} ,
					{x:5*fs,y:-5*fs} ,
					{x:2*fs,y:-4*fs} ,
					{x:0*fs,y:0*fs} ,

				]
			},
			rotationZ:[-180,0],
			
		},
		ease: Linear.easeIn,
	})
	.staggerTo(butNt,5,{
		cycle: {
			bezier: function() {
				return [
					{x:-2*fs,y:4*fs} ,
					{x:-5*fs,y:5*fs} ,
					{x:-4*fs,y:2*fs} ,
					{x:0*fs,y:0*fs} ,
				]
			},
			rotationZ:[90,0],
		},
		ease: Linear.easeIn,
	});
	t.repeat(-1);
	t1.repeat(-1);
	setTimeout(function() {
		pigPlaying.css('display','none');
		zmaWishStart();
		t.stop();
		t1.stop();
	},2000);
}

// zmaWishStart();
// 猪妈妈许愿开始
function zmaWishStart() {
	var zma5 = $('#zma5');
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();

	well2.css('display','block');
	zma5.css('display','block');

	// 猪妈妈前进
	t.from(zma5,2,{
		x: 7*fs,
		ease:Linear.easeIn,

	})
	// 猪妈妈脚步
	t1.to('#zma_fl5',1,{
		x : 1.5*fs,
		rotation:'-30deg',
		ease:Linear.easeIn,
	})
	.to('#zma_fl5',1,{
		x : 0,
		rotation:'0deg',
		ease:Linear.easeIn,
	})
	.to('#zma_fr5',1,{
		x : -1.5*fs,
		rotation:'30deg',
		ease:Linear.easeIn,
	},0)
	.to('#zma_fr5',1,{
		x : 0,
		rotation:'0deg',
		ease:Linear.easeIn,
	},'-=1')
	// 投币
	.staggerTo('#zma_mon',1,{
		cycle: {
			bezier: function() {
				return [
					{x:-2*fs,y:-2*fs},
					{x:-3.5*fs,y:-0.3*fs},
				]
			}
		}
	})	
	.to('#zma_wish',.5,{
		opacity: 1,

	},'+=.5')
	.to(well2,0,{
		display: 'none',
	},'+=2')
	.to(zma5,0,{
		display: 'none',
		onComplete: function() {
			zmaWishGo();
		
		}
	})	

}

// zmaWishGo();
// 猪妈妈愿望实现
function zmaWishGo() {
	var zmaWish = $('#zmaWish');

	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	// 显示
	t.to(zmaWish,0,{
		display: 'block',
	});
	// 猪手摆动
	t1.to('.w3ZmaHl',1,{
		rotation: 20,
	})
	.to('.w3ZmaHr',1,{
		rotation: -20,
	},0)
	.to('.w3ZmaHl',1,{
		rotation: 0,
	})
	.to('.w3ZmaHr',1,{
		rotation: 0,
	},'-=1')
	t1.repeat(-1);
	// 猪消失
	t2.to(zmaWish,0,{
		display: 'none',
		onComplete: function() {
			zbaWishStart();
		}
	},'+=4')
}

zbaWishStart();
// 猪爸爸许愿开始
function zbaWishStart() {
	var zba5 = $('#zba5');
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();

	well2.css('display','block');
	zba5.css('display','block');

	// 猪妈妈前进
	t.from(zba5,2,{
		x: 7*fs,
		ease:Linear.easeIn,

	})
	// 猪妈妈脚步
	t1.to('#zba_fl5',1,{
		x : 1.3*fs,
		rotation:'-40deg',
		ease:Linear.easeIn,
	})
	.to('#zba_fl5',1,{
		x : 0,
		rotation:'0deg',
		ease:Linear.easeIn,
	})
	.to('#zba_fr5',1,{
		x : -1.3*fs,
		rotation:'40deg',
		ease:Linear.easeIn,
	},0)
	.to('#zba_fr5',1,{
		x : 0,
		rotation:'0deg',
		ease:Linear.easeIn,
	},'-=1')
	// 投币
	.staggerTo('#zba_mon',1,{
		cycle: {
			bezier: function() {
				return [
					{x:-2*fs,y:-1*fs},
					{x:-3*fs,y:0.3*fs},
				]
			}
		}
	})	
	.to('#zba_wish',.5,{
		opacity: 1,

	},'+=.5')
	.to(well2,0,{
		display: 'none',
	},'+=2')
	.to(zba5,0,{
		display: 'none',
		onComplete: function() {
		
		}
	})	

}