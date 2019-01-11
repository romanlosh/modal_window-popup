jQuery(document).ready(function() {

	$('.btn-open-popup').on('click', function() {
		$('.overlay').fadeIn();
		$('.overlay').addClass('disabled-popup');
	});

	$('.close-popup').on('click', function() {
		$('.overlay').fadeOut();
	});

	$(document).mouseup(function(event) {
		var popup = $('.popup');
		if (event.target!=popup[0]&&popup.has(event.target).length === 0) {
			$('.overlay').fadeOut();
		}
	});

	$(window).on('load', function() {
		setTimeout(function() {
			if ($('.overlay').hasClass('disabled-popup')) {
				return false;
			} else {
				$('.overlay').fadeIn();
			}
		}, 4000);
	})
})