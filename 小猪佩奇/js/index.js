$(function() {
	var t = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();
	// t.from('#zba',3,{left:'-15rem'});
	// t.from('#zma',3,{left:'-10rem'},0);
	// t.from('#zsi',3,{left:'-20rem'},0);
	// t.from('#zbo',3,{left:'-15rem'},0);

	t2.to('#zba_hl',.8,{
		rotation:'-90deg'
	})
	.to('#zba_hl',.8,{
		rotation:'0deg'
	});
	t3.from('#zba_fl',.8,{
		rotation:'-45deg'
	})
	.to('#zba_fl',.8,{
		rotation:'-45deg'
	});
	t2.repeat(1);
	t3.repeat(1);
});
