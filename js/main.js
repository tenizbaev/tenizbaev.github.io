'use strict';

$(window).on('load', function () {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function ($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		PORTFOLIO
	--------------------*/
	if ($('.portfolio-warp').length > 0) {
		var containerEl = document.querySelector('.portfolio-warp');
		var mixer = mixitup(containerEl);
	}


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Hero Slider
	--------------------*/
	var w_height = $(window).innerHeight();
	$('.hs-item').height(w_height);

	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navText: [' ', '<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function () {
		var index = $(this).index() + 1;
		if (index < 10) {
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		} else {
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		Review Slider
	--------------------*/
	$('.review-slider').owlCarousel({
		margin: 10,
		loop: true,
		nav: false,
		dots: false,
		items: 1,
		autoplay: true,
	});


	/*------------------
		Work Slider
	--------------------*/
	$('.work-slider').owlCarousel({
		margin: 0,
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});

})(jQuery)
const links = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');

links.forEach(link => {
	link.addEventListener('click', event => {
		articles.forEach(article => {
			article.className = '';
			if (article.id == 'home' && link.id == 'home-link') {
				article.className = 'show';
			}
			if (article.id == 'about' && link.id == 'about-link') {
				article.className = 'show';
			}
			if (article.id == 'services' && link.id == 'services-link') {
				article.className = 'show';
			}
			if (article.id == 'portfolio' && link.id == 'portfolio-link') {
				article.className = 'show';
			}
			if (article.id == 'contact' && link.id == 'contact-link') {
				article.className = 'show';
			}
		});
	});
});
const input = document.querySelectorAll('form input');
const label = document.querySelectorAll('form label');

let textarea = document.querySelector('form textarea');
let linkMailto = document.querySelector('form button');

//----------------------------User-information----------------------------
let username = "";
let userEmail = "";
let userText = "";
//------------------------------------------------------------------------

for (let i = 0; i < input.length; i++) {

  input[i].addEventListener('input', function (event) {

    let labelAddress = 'label-' + event.path[0].id; // for find label

    if (this.value.length > 0) {

      document.getElementById(labelAddress).style.visibility = "visible";

    } else if (this.value.length == 0) {

      document.getElementById(labelAddress).style.visibility = "hidden";

    }

    if (event.path[0].id == "name") {
      username = this.value;
      console.log(username);

    } else if (event.path[0].id == "email") {
      userEmail = this.value;
      console.log(userEmail);
    }
  });
}

textarea.addEventListener('input', function () {
  userText = this.value;
  console.log(userText);
});

linkMailto.addEventListener('click', function () {
  linkMailto.href = "mailto:tenizbaevulukbek@outlook.com?subject=" + userText;


});

