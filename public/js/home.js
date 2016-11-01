$(function() {
	// console.log($(window).width(), $(window).height());

	var modalTrigger = document.getElementById('brod');
	var logo = document.getElementById('logo');
	var logoSm = document.getElementById('logo-small');
	var navbar = document.getElementById('navbar');
	var navBtn = document.getElementById('nav-btn');
	var form = document.getElementById('contact-form');
	var navbarBrand = document.getElementById('navbar-brand');
	// var navbarHeader = document.getElementById('navbar-header')

	var viewPort = {
		width: $(window).width(),
		height: $(window).height()
	};
	var divs = {
		home: $('#home'),
		story: $('#story'),
		brod: $('#brod'),
		vision: $('#vision'),
		kontakt: $('#kontakt'),
		ask: $('#ask')
	}

	// if(viewPort.width > 720) {
	// 	console.log($(window).width());
	// 	for (var key in divs) {
	// 		divs[key].css('height', viewPort.height);
	// 	}
	// }


	// window.addEventListener('resize', function (e) {
	// 	console.log($(window).width(), $(window).height());
	// 	console.log(e);

	// });
	function changeNavbarOnScrollTop() {
		logoSm.style.opacity = 0;

		logo.style.opacity = 1;

		// if(viewPort.width > 720) {

		// 	// logo.style.top = '0%';
		// 	// logo.style.transform = 'translateY(0%)';
		// }
		// else {
		// 	// logo.style.top = '-30%';
		// 	// logo.style.transform = 'translateY(-30%)';
		// }

			navbar.style.backgroundColor = 'transparent';
			navbar.style.boxShadow = 'none';
			navbarBrand.style.display = 'none';
	}

	function changeNavOnScrollDown() {
		logo.style.opacity = 0;
		logoSm.style.opacity = 1;
	
		navbar.style.backgroundColor = 'white';
		navbar.style.boxShadow = '0 0 18px -8px #000';
		navbarBrand.style.display = 'inline';

	}
	console.log($('.collapse'));
	var pos = $('body').scrollTop();

	if(pos < 10) {
		changeNavbarOnScrollTop();
	}
	else {
		changeNavOnScrollDown();
	}

	$('#contact-form').submit(function (e) {
	 // sendContactForm()
	 // return false;

		$.ajax({
		  type: 'post',
		  url: '/sayHello',
		  data: $('#contact-form').serialize(),
		  success: function () {
		   // alert("Email has been sent!");
		   $('#contact-form').append('<p>Email has been sent!</p>')
		  }
		});
		e.preventDefault();

	});
	$('.collapse').on('show.bs.collapse', function () {
		logo.style.opacity = 0;
		logoSm.style.opacity = 1;
		navbarBrand.style.display = 'inline';

		console.log($("#navbar-collapse").is(":visible"));
		pos = $('body').scrollTop();
		
		navbar.style.backgroundColor = 'white';
		navbar.style.boxShadow = '0 0 18px -8px #000';
		

		// changeNavOnScrollDown();
	});
	$('.collapse').on('hide.bs.collapse', function () {
		pos = $('body').scrollTop();
		// changeNavbarOnScrollTop();
		console.log($("#navbar-collapse").is(":visible"));
		if(pos < 10) {
			logo.style.opacity = 1;
			logoSm.style.opacity = 0;
			navbar.style.backgroundColor = 'transparent';
			navbar.style.boxShadow = 'none';
		}
	});

	$('.collapse').on('hidden.bs.collapse', function () {

		console.log($("#navbar-collapse").is(":visible"));
	});
	var navBtnVis;
	var menuDown;
	window.addEventListener('scroll', function (e) {
		menuDown = $("#navbar-collapse").is(":visible");
		navBtnVis = $("#nav-btn").is(":visible");
		pos = $('body').scrollTop();

		if(pos < 10 && !navBtnVis) {
			changeNavbarOnScrollTop();

		}
		else if(pos < 10 && navBtnVis && menuDown === false) {
			changeNavbarOnScrollTop();
		}
		else {
			changeNavOnScrollDown();
		}
	});
	
	navbar.addEventListener('click', function (ev) {
		
		if(ev.target.tagName === 'A' ) {
			$('.navbar-collapse').collapse('hide');
		}	
	});

	modalTrigger.addEventListener('click', function	(ev) {

		if(ev.target.id === '1') {
			console.log(1);
			$('#myModal').modal('toggle');
		}
		else if(ev.target.id === '2') {
			$('#myModal').modal('toggle');
		}
		else {
			$('#myModal').modal('toggle');
		}
	});

		// $('.nav a').on('click', function(){
	 //    $('.btn-navbar').click(); //bootstrap 2.x
	 //    $('.navbar-toggle').click() //bootstrap 3.x by Richard
// });
});