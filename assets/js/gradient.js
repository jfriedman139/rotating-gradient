/*JQUERY METHOD*/

/*$(document).ready(function(){

	var outer = $('#app');
	var circle = $('#circle');
	var outerDeg = 0;
	var circleDeg = 180;

	//on mouse move increment and decrement the degree of the angle of the gradient
	outer.mousemove(function() {
		outer.css({
				"background": "linear-gradient(" + outerDeg + "deg, #23074d, #cc5333)",
				"background": "-webkit-linear-gradient(" + outerDeg + "deg, #23074d, #cc5333)"
		});
		circle.css({
				"background": "linear-gradient(" + circleDeg + "deg, #23074d, #cc5333)",
				"background": "-webkit-linear-gradient(" + circleDeg + "deg, #23074d, #cc5333)"
		});
		outerDeg += 5;
		circleDeg -= 5;
	});
});*/

/*VUE METHOD*/

new Vue({
	el: '#app',
	data: {
		outer: 0,
		circle: 180
	},
	methods: {
		//on mouse move increment and decrement the degree of the angle of the gradient
		mouseMove: function() {
			this.outer += 5;
			this.circle -= 5;
		}
	}
})

