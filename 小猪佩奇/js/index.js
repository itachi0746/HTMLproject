
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


// ready事件(首页的动画)
$(firstPage);

// 第一页的
var t11 = new TimelineMax();
var t12 = new TimelineMax();
var t13 = new TimelineMax();
var t14 = new TimelineMax();
var t15 = new TimelineMax();
var t16 = new TimelineMax();
var t17 = new TimelineMax();
var onoff = true;
// 首页的动画的函数
function firstPage() {
	homePage.css('display','block');

	if(onoff) {
		// 猪爸妈前进
		t11.from(zba,4,{
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
				t17.to(homeStart,2,{
					scale: .8,
					ease: Linear.easeIn,
				},'+=.3')
				.to(homeStart,2,{
					scale: 1,
					ease: Linear.easeIn,
				});	
				// t17.repeat(-1);
			
			}		
		})
		.from(zma,4,{
			x:-15*fs,
			ease: Linear.easeIn,
		},0);

		// 猪姐弟前进
		t12.from(zsi,4.2,{
			x:-18*fs,
			ease: Linear.easeIn,
		})
		.from(zbo,4.2,{
			x:-18*fs,
			ease: Linear.easeIn,

		},0);

		// 猪左脚
		t13.to('#zba_fl',1,{
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
		t14.to('#zba_fr',1,{
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
		t15.to('#zsi_fl',.2,{
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
		t15.repeat(2);

		// 猪弟弟跳跃,时长1.4s
		t16.to('#zbo_fl',.2,{
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
		t16.repeat(2);
		t17.repeat(-1);
		t13.repeat(1);
		t14.repeat(1);		
		onoff = false;
	} else {
		t11.restart();
		t12.restart();
		t13.restart();
		t14.restart();
		t15.restart();
		t16.restart();
		t17.restart();
	}


}
// console.log(zbo);

var expressPage = $('#expressPage');
var homePage = $('#homePage');
var clickPage = $('#clickPage');
var wishPage = $('#wishPage');

// 第二页的
var onoff2 = true;
var t24 = new TimelineMax();
var t21 = new TimelineMax();
var t22 = new TimelineMax();
var t23 = new TimelineMax();
var t25 = new TimelineMax();
// 开始按钮点击事件
homeStart.on('click', function() {
	var box = $('#box');
	var well = $('#well');
	var zeb = $('#zeb');
	// console.log(homePage,expressPage);
	homePage.css('display','none');
	expressPage.css('display','block');

	if(onoff2) {
		onoff2 = false;
		// 斑马前进 3.2s
		t24.from(box,3.2,{
			x: -10*fs,
			ease: Linear.easeIn,
		})
		.from('#zeb',3.2,{
			x: -10*fs,
			ease: Linear.easeIn,
		},0)
		// 斑马行走
		t21.to('#zeb_fl',0.8,{
			x : 0.8*fs,
			rotation:'-20deg',
		})
		.to('#zeb_fr',0.8,{
			x : -1*fs,
			rotation:'20deg',
		},0)
		.to('#zeb_fl',0.8,{
			x : 0*fs,
			rotation:'0deg',
		})
		.to('#zeb_fr',0.8,{
			x : 0,
			rotation:'0deg',
		},'-=0.8')

		t21.repeat(1);

		// 斑马放下快递 3.2+1.5s
		// 弯腰
		t22.to('#zeb_bd',1,{
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
			onComplete: function() {
				// 走开
				t23.to('#zeb_fl',.8,{
					x : .8*fs,
					rotation:'-20deg',
				})
				.to('#zeb_fr',.8,{
					x : -1*fs,
					rotation:'20deg',
				},0)
				.to('#zeb_fl',.8,{
					x : 0,
					rotation:'0deg',
				})
				.to('#zeb_fr',.8,{
					x : 0,
					rotation:'0deg',
				},'-=.8')				
			}
		})	
		.to('#zeb',3,{
			x: -8*fs,
			onComplete: function() {
				expressPage.css('display','none');
				clickPage.css('display','block');
				clickBox();
			}
		})



	}else {
		t21.restart();
		t22.restart();
		t24.restart();
	}

});
// ====++++++++++++++++++++===========================
var btnBox = $('#btnBox');
var onoff3 = true;
var t35 = new TimelineMax();
var t31 = new TimelineMax();
var t32 = new TimelineMax();
var t33 = new TimelineMax();
var t34 = new TimelineMax();
// 点击快递后的操作
function clickBox() {
	var clickDiv = $('.clickDiv');
	var box2 = $('#box2');
	var well = $('#well');

	if(onoff3) {
		onoff3 = false;
		// 手指
		t35.to(btnBox,1,{
			y: .2*fs,
		})
		.to(btnBox,1,{
			y: 0*fs,
		});
		// 云
		t31.to('.zbaCloud',2,{
			y: .3*fs,
		})
		.to('.zbaCloud',2,{
			y: 0*fs,
		});
		t32.to('.zmaCloud',2,{
			y: .3*fs,
		},'+=1')
		.to('.zmaCloud',2,{
			y: 0*fs,
		});
		t33.to('.zsiCloud',2,{
			y: .3*fs,
		},'-=1')
		.to('.zsiCloud',2,{
			y: 0*fs,
		});
		t34.to('.zboCloud',2,{
			y: .3*fs,
		},'+=1')
		.to('.zboCloud',2,{
			y: 0*fs,
		});

		t35.repeat(-1);
		t31.repeat(-1);
		t32.repeat(-1);
		t33.repeat(-1);
		t34.repeat(-1);		
	} else {
		t35.restart();
		t31.restart();
		t32.restart();
		t33.restart();
		t34.restart();				
	}


	// 点击箱子
	clickDiv.on('click',function() {

		btnBox.css('display','none');
		box2.css('display','none');
		clickDiv.css('display','none');
		well.css('display','block');
		setTimeout(function() {
			t35.stop();
			t31.stop();
			t32.stop();
			t33.stop();
			t34.stop();
			clickPage.css('display','none');
			wishPage.css('display','block');
			zboWishStart();
		},1000);
	})
}


var well2 = $('#well2');
var onoff4 = true;
var t45 = new TimelineMax();
var t41 = new TimelineMax();
var t42 = new TimelineMax();
var t43 = new TimelineMax();
var t44 = new TimelineMax();
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
	well2.css('display','block');

	if(onoff4) {
		onoff4 = false;
		// 猪弟弟前进
		t45.from(zbo4,1.4,{
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
				t42.to(well2,0,{
					display: 'none',
				},'+=1')
				.to(zbo4,0,{
					display: 'none',

					onComplete: function() {
						zboWish.css('display','none');
						zbo5.css('display','block');
						// 龙掉下来
						t44.from('#dinosaur',.5,{
							y: -20*fs,
						});
						// 猪手 龙摆动
						t43.to('#dinosaur_wp',.5,{
							rotation: -5,
						})
						.to('#dinosaur_wp',.5,{
							rotation: 0,
						});
						t43.repeat(-1);
						//  猪弟弟消失
						setTimeout(function() {
							zbo5.css('display','none');
							zsiWishStart();
							t43.stop();
						},2000);
					}
				});

				

			}
		})
		// 猪弟弟跳跃,时长1.4s
		t41.to('.zbo_fl',.2,{
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
		t41.repeat(0);		
	} else {
		t41.restart();
		t45.restart();
	}

}
// =====================================================
var onoff5 = true;
var t54 = new TimelineMax();
var t51 = new TimelineMax();
var t52 = new TimelineMax();
// zsiWishStart();
// 猪姐姐许愿
function zsiWishStart() {
	var zsi5 = $('#zsi5');
	var zsiMon = $('#zsi_mon');

	zsi5.css('display','block');
	zsiMon.css('opacity','1');
	well2.css('display','block');

	if(onoff5) {
		onoff5 = false;
		// 猪姐姐前进   2s
		t54.from(zsi5,2,{
			x: 7*fs,
			ease: Linear.easeIn,
			onComplete: function () {
				console.log('j投币');
				// 投币
				t52.staggerTo(zsiMon,1,{
					cycle: {
						bezier: function() {
							return [
								{x:-2*fs,y:-2*fs},
								{x:-3*fs,y:-1*fs},
							]
						}
					}
				},'+=1')
				.to(zsiMon,0,{
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
						$('#zsi_wish').css('opacity','0');
						zsiWishGo();
					}
				})

			}
		});

		// 猪姐姐跳跃,时长1s
		t51.to('#zsi_fl5',.2,{
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
		t51.repeat(1);			
	} else {
		t51.restart();
		t54.restart();
	}
	
}
// ==========================================================
var onoff6 = true;
var t61 = new TimelineMax();
var t62 = new TimelineMax();
// zsiWishGo();
// 姐弟跳泥
function zsiWishGo() {
	var pigPlaying = $('#pigPlaying');
	pigPlaying.css('display','block');

	var zsiNt = $('#zsiNt');
	var zboNt = $('#zboNt');
	var butNt = $('#butNt');

	if(onoff6) {
		onoff6 = false;
		// 猪跳跃
		t61.to(zsiNt,.5,{
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
		t62.staggerTo(butNt,5,{
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
		t61.repeat(-1);
		t62.repeat(-1);

	} else {
		t61.restart();		
		t62.restart();	

	}
	setTimeout(function() {
		pigPlaying.css('display','none');
		zmaWishStart();
		t61.stop();
		t62.stop();
	},2000);	

}
// ====================================================
var onoff7 = true;
var t71 = new TimelineMax();
var t72 = new TimelineMax();
// zmaWishStart();
// 猪妈妈许愿开始
function zmaWishStart() {
	var zma5 = $('#zma5');
	var zmaMon = $('#zma_mon');
	well2.css('display','block');
	zma5.css('display','block');
	zmaMon.css('opacity','1');

	if(onoff7) {
		onoff7 = false;
		// 猪妈妈前进
		t72.from(zma5,2,{
			x: 7*fs,
			ease:Linear.easeIn,

		})
		// 猪妈妈脚步
		t71.to('#zma_fl5',1,{
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
		.staggerTo(zmaMon,1,{
			cycle: {
				bezier: function() {
					return [
						{x:-2*fs,y:-2*fs},
						{x:-3.5*fs,y:-0.3*fs},
					]
				}
			}
		})	
		.to(zmaMon,0,{
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
				$('zma_wish').css('opacity','0');
				zmaWishGo();
			
			}
		})	
	} else {
		t71.restart();
		t72.restart();
	}


}
// ==================================================
var onoff8 = true;
var t83 = new TimelineMax();
var t81 = new TimelineMax();
var t82 = new TimelineMax();
// zmaWishGo();
// 猪妈妈愿望实现
function zmaWishGo() {
	var zmaWish = $('#zmaWish');

	if(onoff8) {
		onoff8 = false;
		// 显示
		t83.to(zmaWish,0,{
			display: 'block',
		});
		// 猪手摆动
		t81.to('.w3ZmaHl',1,{
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
		t81.repeat(-1);
		// 猪消失
		t82.to(zmaWish,0,{
			display: 'none',
			onComplete: function() {
				zbaWishStart();
			}
		},'+=4')
	} else {
	  	t81.restart();
	  	t82.restart();
	  	t83.restart();
	}

}
// ==========================================================
var onoff9 = true;
var t91 = new TimelineMax();
var t92 = new TimelineMax();

// zbaWishStart();
// 猪爸爸许愿开始
function zbaWishStart() {
	var zba5 = $('#zba5');
	var zbaMon = $('#zba_mon');

	well2.css('display','block');
	zba5.css('display','block');
	zbaMon.css('opacity','1');

	if(onoff9) {
		onoff9 = false;
		// 猪爸爸前进
		t92.from(zba5,2,{
			x: 7*fs,
			ease:Linear.easeIn,

		})
		// 猪爸爸脚步
		t91.to('#zba_fl5',1,{
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
		.staggerTo(zbaMon,1,{
			cycle: {
				bezier: function() {
					return [
						{x:-2*fs,y:-1*fs},
						{x:-3*fs,y:0.3*fs},
					]
				}
			}
		})	
		.to(zbaMon,0,{
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
				$('#zba_wish').css('opacity','0');
				zbaWishGo();
			}
		})			
	} else {
		t91.restart();
		t92.restart();
	}


}
// =========================================================
var onoff10 = true;
var t104 = new TimelineMax();
var t101 = new TimelineMax();
var t102 = new TimelineMax();
var t103 = new TimelineMax();
// zbaWishGo();
// 猪爸愿望实现
function zbaWishGo() {
	var w4Zsi = $('.w4_zsi');
	var w4Zbo = $('.w4_zbo');
	var zbaWish = $('#zbaWish');
	var wishPage = $('#wishPage');

	if(onoff10) {
		onoff10 = false;
		t104.to(zbaWish,0,{
			display: 'block',
		})
		// 姐姐玩球
		t101.to(w4Zsi,1,{
			y: -1*fs,
			ease: Circ.easeOut,
		})	
		.to(w4Zsi,1,{
			y: 1*fs,
			ease: Circ.easeIn,
		})

		t101.repeat(-1);

		// 弟弟玩球
		t102.to(w4Zbo,1,{
			y: 0.5*fs,
			ease: Circ.easeIn,
		})
		.to(w4Zbo,1,{
			y: 0*fs,
			ease: Circ.easeOut,
		})
		t102.repeat(-1);

		// 跳到下一页
		t103.to(zbaWish,0,{
			display: 'none',
			onComplete: function() {
				t101.stop();
				t102.stop();
				wishPage.css('display','none');			
				// shakeShake();
				shakeResult();
			}
		},'+=4')		
	} else {
		t101.restart();
		t102.restart();
		t103.restart();
		t104.restart();
	}

}
// =============================================================
// 是否第一次摇
var firstShake = false;	
var onoff11 = true;
var t111 = new TimelineMax();
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

	if(onoff11) {
		onoff11 = false;
		// 摇手机
		t111.to(yaoyiyao,.5,{rotation: 10})
		.to(yaoyiyao,.5,{rotation: 0});
		t111.repeat(-1);		
	} else {
		t111.restart();
	}
	if(window.DeviceMotionEvent){//判断设备是否支持运动传感事件。
	        window.addEventListener('devicemotion', shake, false);//如果支持，那么就绑定shake方法到事件上
	}else{
	        alert('本设备不支持摇一摇功能');
	}
	//首先定义一下，全局变量
	var lastTime = 0;//此变量用来记录上次摇动的时间
	var x = y = z = lastX = lastY = lastZ = 0;//此组变量分别记录对应x、y、z三轴的数值和上次的数值
	var shakeSpeed = 6000;//设置阈值
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
	                        t.stop();
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
	var box2 = $('#box2');
	var well = $('#well');
	// var homePage= $('#homePage');

	playAgain.on('click',function() {
		btnBox.css('display','block');
		clickDiv.css('display','block');
		box2.css('display','block');

		lastPage.css('display','none');
		well.css('display','none');
		// homePage.css('display','block');
		firstShake = true;
		firstPage();
	})
}