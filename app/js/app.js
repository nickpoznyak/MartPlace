document.addEventListener("DOMContentLoaded", function() {

	// Custom JS


	$(".f-products__item-spec__rating").rateYo({
		rating: 4.5,
		starWidth: "15px",
		normalFill: "#dddddd",
		ratedFill: "#ffc000",
		spacing: "3px",
		readOnly: true
	});


	$(".new-products__item-spec__rating").rateYo({
		rating: 4,
		starWidth: "15px",
		normalFill: "#dddddd",
		ratedFill: "#ffc000",
		spacing: "3px",
		readOnly: true
	});

	$(".f-products__slider").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $(".f-products__head-nav")
	});
	
	var mixer = mixitup(".new-products-inner-box");


});
