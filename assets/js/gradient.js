$(document).ready(function(){

	var outer = $('body');
	var circle = $('#circle');
	var outerDeg = 0;
	var circleDeg = 180;
	var hover = false;


	//Run function every 20 ms	
	setInterval(function() {

		//if hover is still active incriment the degree of the angle of the gradient by 1
		if (hover) {
			outer.css('background', "linear-gradient(" + outerDeg + "deg, #23074d, #cc5333)");
			circle.css('background', "linear-gradient(" + circleDeg + "deg, #23074d, #cc5333)");
			outerDeg += 1;
			circleDeg -= 1;
		}
	}, 20);

	//set global hover state
	outer.hover(function() {
		if (hover) {
			hover = false;
		} else {
			hover = true;
		}
	});
})

