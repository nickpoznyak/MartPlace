document.addEventListener("DOMContentLoaded", function() {

	// Custom JS


	$(".f-products__item-spec__rating, .new-products__item-spec__rating, .product-stat__rating, .product-card__rating").rateYo({
		// rating: 4.5,
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
		appendArrows: $(".f-products__head-nav"),
		// responsive: [
		// 	{
		// 		breakpoint: 960,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 1,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1
		// 		}
		// 	}			
		// ]
	});

	$(".followers__slider").slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $(".followers__head-nav"),
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.collapsible').on('click', function(){
		$(this).toggleClass('collapsed');
		$(this).siblings('.collapsible-content').toggleClass('collapsed');
		$(this).siblings('.collapsible-content').slideToggle(300);

	});

	$('.buyer-btn').on('click', function(){
		$('.header__buyer').toggleClass('active');
	});

	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
	});

	$('.has-dropdown').click(function(event) {
		$(this).toggleClass('active');
	});
	
	$(".product-tab-item").not(":first").hide();
	$(".product-tabs .product-tab").click(function() {
		$(".product-tabs .product-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".product-tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".js-range-slider").ionRangeSlider({
		hide_min_max: true
	});

	var containerEl = document.querySelector(".new-products-inner-box");
	var mixer;
	if (containerEl) {
		mixer = mixitup(containerEl);
	};

	//Анимация счетчиков на JS
	// const counters = document.querySelectorAll('.counter');
	// const speed = 200;
	// counters.forEach(counter => {
	// 	const updateCount = () => {
	// 		const target = +counter.getAttribute('data-target');
	// 		const count = +counter.innerText;

	// 		const inc = target / speed;
	// 		if(count < target) {
	// 			counter.innerText = Math.ceil(count + inc);
	// 			setTimeout(updateCount, 1);
	// 		}else{
	// 			count.innerText = target;
	// 		}

	// 		console.log(count);
	// 	}
	// 	updateCount();
	// })

	//Анимация счетчиков на jQuery
	// $('.counter').each(function () {
  //   $(this).prop('Counter',0).animate({
  //       Counter: $(this).text()
  //   }, {
  //       duration: 4000,
  //       easing: 'swing',
  //       step: function(now) {
	// 				$(this).text(Math.ceil(now).toLocaleString('en'));
	// 		}
	// 	});
	// });



	var block_show = false;
 
	function scrollTracking(){
		if (block_show) {
			return false;  //показываем анимацию только один раз
		}
		
		var wt = $(window).scrollTop();	//смещение начала окна от начала страницы
		var wh = $(window).height();	//высота окна
		var et = $('.counter').offset().top;   //смещение блока-триггера от начала страницы
		var eh = $('.counter').outerHeight();	//высота блока-триггера
		var dh = $(document).height();   //высота всего документа
		
		if (wt + wh >= et || wh + wt == dh || eh + et < wh){
			block_show = true;
			
			// Код анимации
			$('.counter').each(function () {
				$(this).prop('Counter',0).animate({
						Counter: $(this).text()
				}, {
						duration: 2000,
						easing: 'swing',
						step: function(now) {
							$(this).text(Math.ceil(now).toLocaleString('en'));
					}
				});
			});
			// Конец кода анимации
		}
	}
	
	$(window).scroll(function(){
		scrollTracking();
	});
	
	$(document).ready(function(){ 
		scrollTracking();
	});
	

});
