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

		if (result === false) {
			$('.no').show();
			$('.yes').hide();
			$('.scalene').hide();
			$('.isosceles').hide();
			$('.equilateral').hide();	
		} else {
			$('.no').hide();
			$('.yes').show();
			if (result === 'scalene') {
				$('.result').text("a " + result).show();
				$('.scalene').show();
				$('.isosceles').hide();
				$('.equilateral').hide();
			} else {
				$('.result').text("an " + result).show();
				if (result == 'isosceles') {
					$('.scalene').hide();
					$('.isosceles').show();
					$('.equilateral').hide();
				} else {
					$('.scalene').hide();
					$('.isosceles').hide();
					$('.equilateral').show();					
				}
			}
		}

		$('.side1').text(side1);
		$('.side2').text(side2);
		$('.side3').text(side3);

		$('#result').show()
		event.preventDefault();
	});
});