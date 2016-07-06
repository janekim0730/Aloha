// bxslider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto:true  
  });

// subscribe
$(function() {
		$('.newsletter').on('submit', 'form', function(event) {
			event.preventDefault();
			var $emailInput = $('#your-email');

			if ( $emailInput.val().length !== 0 ) {
				alert('Thank you for subscribing!');
				$emailInput.val('');
			} else {
				alert('Please submit a valid email address.');
			}
		});
	});

//smooth scrolling
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
