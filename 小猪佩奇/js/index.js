
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


// 太阳
t0 = new TimelineMax();
t0.to(sun,10,{
	rotation:'360deg',
	ease: Linear.easeIn,
});
t0.repeat(-1);

function resetStyle(arg) {
	arg.style = 'none';
}

// ready事件(首页的动画)
$(firstPage);

// 首页的动画的函数
function firstPage() {
	var t = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();
	var t4 = new TimelineMax();
	var t5 = new TimelineMax();
	var t6 = new TimelineMax();
	var t7 = new TimelineMax();
	var homePage= $('#homePage');

	homePage.css('display','block');



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

}
// console.log(zbo);

var expressPage = $('#expressPage');
var homePage = $('#homePage');
var clickPage = $('#clickPage');
var wishPage = $('#wishPage');

// 开始按钮点击事件
homeStart.on('click', function() {
	var box = $('#box');
	var well = $('#well');
	var zeb = $('#zeb');
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
	// .set('#zeb_hr',{
	// 	display: 'none',
	// })	
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
		console.log(zeb.style);
		zeb.style = 'none';
		console.log(zeb.style);
		btnBox.css('display','none');
		box2.css('display','none');
		clickDiv.css('display','none');
		well.css('display','block');
		setTimeout(function() {
			t.clear();
			t1.clear();
			t2.clear();
			t3.clear();
			t4.clear();
			clickPage.css('display','none');
			wishPage.css('display','block');
			zboWishStart();
		},1000);
	})
}


var well2 = $('#well2');

// 测试效果函数
// zboWishStart();
// 猪弟弟许愿动画
function zboWishStart() {
	var zbo4 = $('#zbo4');
	var zbo5 = $('#zbo5');
	var zboWish = $('#zbo_wish');
	var zboMon = $('#zbo_mon');

	zbo4.css('display','block');
	zboMon.css('display','block');

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
					//  猪弟弟消失
					setTimeout(function() {
						zbo5.css('display','none');
						zsiWishStart();
						t3.clear();
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
	var zsiMon = $('#zsi_mon');
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();

	zsi5.css('display','block');
	zsiMon.css('display','block');

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
		t.clear();
		t1.clear();
	},2000);
}

// zmaWishStart();
// 猪妈妈许愿开始
function zmaWishStart() {
	var zma5 = $('#zma5');
	var zmaMon = $('#zma_mon');
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
	.to('#zma_mon',0,{
		opacity: 0,
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

// zbaWishStart();
// 猪爸爸许愿开始
function zbaWishStart() {
	var zba5 = $('#zba5');
	var zbaMon = $('#zba_mon');
	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();

	well2.css('display','block');
	zba5.css('display','block');
	zbaMon.css('display','block');

	// 猪爸爸前进
	t.from(zba5,2,{
		x: 7*fs,
		ease:Linear.easeIn,

	})
	// 猪爸爸脚步
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
	.to('#zba_mon',0,{
		opacity: 0,
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
			zbaWishGo();
		}
	})	

}

// zbaWishGo();
// 猪爸愿望实现
function zbaWishGo() {
	var w4Zsi = $('.w4_zsi');
	var w4Zbo = $('.w4_zbo');
	var zbaWish = $('#zbaWish');
	var wishPage = $('#wishPage');

	var t = new TimelineMax();
	var t1 = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();

	t.to(zbaWish,0,{
		display: 'block',
	})
	// 姐姐玩球
	t1.to(w4Zsi,1,{
		y: -1*fs,
		ease: Circ.easeOut,
	})	
	.to(w4Zsi,1,{
		y: 1*fs,
		ease: Circ.easeIn,
	})

	t1.repeat(-1);

	// 弟弟玩球
	t2.to(w4Zbo,1,{
		y: 0.5*fs,
		ease: Circ.easeIn,
	})
	.to(w4Zbo,1,{
		y: 0*fs,
		ease: Circ.easeOut,
	})
	t2.repeat(-1);

	// 跳到下一页
	t3.to(zbaWish,0,{
		display: 'none',
		onComplete: function() {
			t1.clear();
			t2.clear();
			wishPage.css('display','none');			
			// shakeShake();
			shakeResult();
		}
	},'+=4')
}

// 是否第一次摇
var firstShake = false;	

// shakeShake();
// 摇一摇页面
function shakeShake() {

	var shakePage = $('#shakePage');
	shakePage.css('display','block');
	var yaoyiyao = $('.yaoyiyao');
	var bg8_yyy = $('.bg8_yyy');
	var bg10_yyy = $('.bg10_yyy');
	if(firstShake) {
		bg8_yyy.css('display','block');
		bg10_yyy.css('display','none');
		// firstShake = false;	
	}else {
		bg8_yyy.css('display','none');
		bg10_yyy.css('display','block');
	}
	// 水泡
	var q1 = $('.bg8_q1');
	var q2 = $('.bg8_q2');
	var q3 = $('.bg8_q3');

	var t = new TimelineMax();
	var t1 = new TimelineMax();
	// 摇手机
	t.to(yaoyiyao,.5,{rotation: 10})
	.to(yaoyiyao,.5,{rotation: 0});
	t.repeat(-1);
	// 气泡上升
	// t1.to(q3,2,{y: -1*fs,ease: Linear.easeIn})
	// .to(q2,2,{y: -1*fs,ease: Linear.easeIn},0)
	// .to(q1,2,{y: -1*fs,ease: Linear.easeIn},0)
	// 气泡消失
	// .to(q3,.5,{opacity: 0},'-=1.5')
	// .to(q2,.5,{opacity: 0},'-=1')
	// .to(q1,.5,{opacity: 0},'-=0.5')
	// t1.repeat(-1);
	if(window.DeviceMotionEvent){//判断设备是否支持运动传感事件。
	        window.addEventListener('devicemotion', shake, false);//如果支持，那么就绑定shake方法到事件上
	}else{
	        alert('本设备不支持摇一摇功能');
	}
	//首先定义一下，全局变量
	var lastTime = 0;//此变量用来记录上次摇动的时间
	var x = y = z = lastX = lastY = lastZ = 0;//此组变量分别记录对应x、y、z三轴的数值和上次的数值
	var shakeSpeed = 5000;//设置阈值
	//编写摇一摇方法
	function shake(eventData){
	        var acceleration = eventData.accelerationIncludingGravity;//获取设备加速度信息
	        var nowTime = new Date().getTime();//记录当前时间
	        //如果这次摇的时间距离上次摇的时间有一定间隔 才执行
	        if(nowTime - lastTime > 100){
	                var diffTime = nowTime - lastTime;//记录时间段
	                lastTime = nowTime;//记录本次摇动时间，为下次计算摇动时间做准备
	                x = acceleration.x;//获取x轴数值，x轴为垂直于北轴，向东为正
	                y = acceleration.y;//获取y轴数值，y轴向正北为正
	                z = acceleration.z;//获取z轴数值，z轴垂直于地面，向上为正
	                //计算 公式的意思是 单位时间内运动的路程，即为我们想要的速度
	                var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
	                if(speed > shakeSpeed){//如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
	                        t.clear();
	                        shakePage.css('display','none');
	                        shakeResult();
	                        //这里就是放置如果用户成功的摇一摇，将要触发的事件
	                }
	                lastX = x;//赋值，为下一次计算做准备
	                lastY = y;//赋值，为下一次计算做准备
	                lastZ = z;//赋值，为下一次计算做准备
	        }
	}

}

// shakeResult();
// 摇一摇
function shakeResult() {
	// 是否第一次摇
	if(firstShake){
		firstShake = false;
		var wishOne = $('#wishOne');
		var bg9Btn = $('#bg9_btn');

		wishOne.css('display','block');

		var t = new TimelineMax();
		t.fromTo(bg9Btn,1,{
			y: 10*fs,
		},{
			y: 0,
			ease: Back.easeOut,
		});
		bg9Btn.on('click',function() {
			wishOne.css('display','none');
			shakeShake();
		})		
	}else {
		var wishTwo = $('#wishTwo');
		var wishTwo2 = $('#wishTwo2');
		var ticketBtn = $('#ticket_btn');

		wishTwo.css('display','block');
		// 优惠券点击
		ticketBtn.on('click',function() {
			console.log(555);
			wishTwo.css('display','none');
			wishTwo2.css('display','block');
			toLastPage();
		})

	}
}

// toLastPage();
function toLastPage() {
	var wishTwo2 = $('#wishTwo2');
	var noShareBtn = $('#noShare_btn');
	var lastPage = $('#lastPage');
	noShareBtn.on('click',function() {
		lastPage.css('display','block');
		wishTwo2.css('display','none');
		restart();
	})
}

// 最后一页的点击
function restart() {
	var lastPage = $('#lastPage');
	var playAgain= $('#playAgain');
	var clickDiv = $('.clickDiv');
	var btnBox = $('#btnBox');
	var well = $('#well');
	var box2 = $('#box2');
	// var homePage= $('#homePage');

	playAgain.on('click',function() {
		btnBox.css('display','block');
		clickDiv.css('display','block');
		btnBox.css('display','block');
		box2.css('display','block');

		lastPage.css('display','none');
		well.css('display','none');
		// homePage.css('display','block');
		firstShake = true;
		firstPage();
	})
}