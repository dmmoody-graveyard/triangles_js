var triangles = function(side1, side2, side3) {
	if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
		return false;
	} else if ((side1 === side2) && (side2 === side3)) {
		return 'equilateral';
	} else if ((side1 === side2) || (side2 === side3) || (side3 === side1)) {
		return 'isosceles';
	} else {
		return 'scalene';
	}
};

$(document).ready(function() {
	$('form#sides').submit(function(event) {
		var side1 = parseInt($('input#side1').val());
		var side2 = parseInt($('input#side2').val());
		var side3 = parseInt($('input#side3').val());
		var result = triangles(side1, side2, side3);

		$('.result').text(result);

		$('#result').show()
		event.preventDefault();
	});
});