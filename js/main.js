function dataScroll(con) {
	var datalist = con.find("li");
	con.append(datalist.clone());
	var scroll = {
		timer: null,
		n: 0,
		size: datalist.length,
		h: datalist.eq(0).height(),
		start: function() {
			con.animate({
				"scrollTop": scroll.h * (scroll.n + 1)
			}, function() {
				scroll.n++;
				if (scroll.n == scroll.size) {
					scroll.n = 0;
					con.scrollTop(0);
				}
			});
		}
	};
	scroll.timer = setInterval(scroll.start, 5000);
	con.mouseover(function() {
		clearInterval(scroll.timer);
	}).mouseout(function() {
		scroll.timer = setInterval(scroll.start, 5000);
	});
}