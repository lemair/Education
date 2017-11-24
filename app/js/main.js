$('.sl').slick({
	autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
	dots: false,
	prevArrow: false,
	nextArrow: false

});
$('.active-by-brand').slick({
	speed: 700,
	arrows: true,
	dots: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>',
	responsive: [
	{ breakpoint: 991, settings: { slidesToShow: 3 }  },
	{ breakpoint: 767, settings: { slidesToShow: 1 }  },
	{ breakpoint: 479, settings: { slidesToShow: 1 }  }
	]
<<<<<<< HEAD
});
<<<<<<< HEAD
/*------------------------------------
			4.6 Active Related Product
	-------------------------------------- */
    $('.active-related-product').slick({
        speed: 700,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {  breakpoint: 991,   settings: { slidesToShow: 2,  }  },
            {  breakpoint: 767,   settings: { slidesToShow: 1, }   },
            {  breakpoint: 479,   settings: { slidesToShow: 1, }   },
        ]
    });
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } 
        else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } 
            else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
=======
});
>>>>>>> parent of 7570f10... 2pages
=======
>>>>>>> parent of 3846db6... common
