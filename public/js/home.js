$(function() {

	var modalTrigger = document.getElementById('brod');
	var logo = document.getElementById('logo');
	var logoSm = document.getElementById('logo-small');
	var navbar = document.getElementById('navbar');
	var navBtn = document.getElementById('nav-btn');
	var form = document.getElementById('contact-form');
	var navbarBrand = document.getElementById('navbar-brand');
	var swe = document.getElementById('swe');
	var eng = document.getElementById('eng');
	var modal = document.getElementById('myModal');
	var modal2 = document.getElementById('myModal-2');
	var modal3 = document.getElementById('myModal-3');
	var viewPort = {
		width: $(window).width(),
		height: $(window).height()
	};

	
	var pos = $('body').scrollTop();
	function resizeNavbar() {

		if(pos < 10) {
			changeNavbarOnScrollTop();
		}
		else {
			changeNavOnScrollDown();
		}

	}
	function changeNavbarOnScrollTop() {
		logoSm.style.opacity = 0;

		logo.style.opacity = 1;

		navbar.style.backgroundColor = 'transparent';
		navbar.style.boxShadow = 'none';

		if(viewPort.width > 720) {
			navbar.style.padding = '85px';
		}
	}

	function changeNavOnScrollDown() {
		logo.style.opacity = 0;
		logoSm.style.opacity = 1;
	
		navbar.style.backgroundColor = 'white';
		navbar.style.boxShadow = '0 0 18px -8px #000';

		if(viewPort.width > 720) {
			navbar.style.padding = '35px';
		}
	}
	function switchLangToEnglish() {

		$('.bee').attr('src', 'img/bimedbubbla-eng.png')
		$('#nav-bread').html('').append('BREAD');
		$('#nav-contact').html('').append('CONTACT');
		$('.text-story').html('').append(
			'<h1>STORY</h1>' + 
			'<p>Stomach problem after stomach problem, illness after illness and a continuously weak body. I decided to follow a recommendation from my doctor and tried removing gluten from my diet. Slowly but surely the stomach problems, illnesses and weakness disappeared! It was real freedom, the kind of freedom I hope many can experience.</p>' + 

			'<p>I quickly discovered that the gluten-free bread you can buy at the store isn´t good or useful, it has both wheat starch and additives.</p>' + 

			'<p>My food-and-health interest grew even stronger than ever and it was clear so I began baking gluten-free bread from cookbooks, and then began experimenting further with my own bread in the kitchen, exactly how I would like it to taste! And here they are!</p>');
		$('.text-bread').html('').append(
			'<h1>ALL NATURAL GLUTEN-FREE DELICIOUS BREAD</h1>' + 
			'<p>Through meditation and yoga, nature and all things natural have been a large part of my life. I want to supply that which is most useful for both you and our planet. That is why these breads are natural and have antioxidants, proteins, vitamins, minerals and fiber that we need to feel good and live well!</p>');
		$('.text-vision').html('').append(
			'I want to bake bread that everyone can eat, feel good about and enjoy! That´s why my bread is free from allergens, gluten, additives and animal products etc. The bread is for everyone who wants to live healthy and still eat well!');
		$('.text-contact').html('').append(
			'WRITE TO ME!');
		$('.text-faq').html('').append(
			'<h1>FAQ- questions</h1>' +


		'<p>What does it mean to be naturally gluten-free? ' + 
'For me, it means that I try to have 0 ppm gluten in my diet. Part of that also means it should be naturally free from gluten and not artificially purified of it. It shouldn´t be contaminated in any way between its creation and your mouth. Studies show at there are many health benefits with eating naturally gluten-free. For me to call something naturally gluten-free means that the bread does not contain:</p>' + 

		'<p>Wheat (kamut, spelled, durum, couscous, semolina, farro, bulgur, semolina etc.)' + 
		'<p>Rye</p>' +
		'<p>Barley</p>' +
		'<p>Oat</p>' +
		'<p>Wheat starch (including so-called "gluten-free")</p>' + 
		'<p>Glucose syrup (wheat)</p>' +
		'<p>Glucose, dextrose (wheat)</p>' + 
		'<p>Maltodextrin (wheat, barley)</p> ' + 
		'<p>Caramel (wheat)</p>' +

		'<p><i>How can you beak bread naturally gluten-free?</i><p>' + 
		'<p>I bake with natural clean flour such as flour from buckwheat, corn, cassava, seeds, dried berries, sourdough made from rice and a small part (0.3%) fermented rice flour.</p>' +

		'<p><i>Why Vegan?</i></p>' + 

		'<p>Avoiding animal-based products is one way of not supporting the animal industry`s cruelties. Eating vegan also means that you help reduce CO2 emissions. Also, new studies show that there are many positive health benefits to a vegan diet.</p>');
	}
	resizeNavbar();

	function switchLangToSwedish() {
		$('.bee').attr('src', 'img/bimedbubbla.jpg')
		$('#nav-bread').html('').append('BRÖD');
		$('#nav-contact').html('').append('KONTAKT');
		$('.text-story').html('').append(
			'<h1>STORY</h1>' + 
			'<p>Maginfektion efter maginfektion, förkylning på fökyling och ständig svaghet i kropppen. Jag bestämde mig efter en rekommendation av min läkare att testa utesluta gluten ur kosten. Sakta men säkert försvann maginfektioner, förkylningar och svagheten! Det var verkligen en befrielse som jag hoppas fler ska få uppleva</p>' + 

			'<p>Snabbt upptäckte jag att det glutenfria bördet som fanns att köpa i butikerna varken var goda eller nyttiga, de innehöll både tillsatser och glutenfri vetestärkelse.</p>' + 

			'<p>Mitt stora mat- och hälsointresse växte sig ännu starkare än förr och det var självklart att jag började baka glutenfria bröd från kokböcker för att sen börja experimentera fram mina egna bröd i köket, precis som jag ville de skulle smaka! And here they are!</p>');;
		$('.text-bread').html('').append(
			'<h1>ALL NATURAL GLUTEN-FREE DELICIOUS BREAD</h1>' + 
			'<p>Genom meditation och yoga har naturen och det naturliga blivit en stor del av mitt liv. Jag vill tillföra det som är till störst nytta för både dig och vår planet. Därför är dessa bröden naturliga och innehåller både antioxdanter, proteiner, vitaminer, mineraler och fibrer som vi behöver för att må bra och leva gott!</p>');
		$('.text-vision').html('').append(
			'Jag vill baka bröd som alla ska kunna äta, må bra och njuta av! Därför är mina bröd fria från allergener, gluten, tillsatser och animaliska produkter etc. Bröden är till för alla som vill leva sunt och ändå äta gott!');
		$('.text-contact').html('').append(
			'SKRIV TILL MIG!');
		$('.text-faq').html('').append(
			'<h1>FAQ- questions</h1>' +


		'<p>Vad innebär naturligt glutenfritt? ' + 
			'Det innebär för mig att jag strävar efter 0 ppm gluten i kosten. Dels ska det vara naturligt fritt från gluten och inte artificiellt renat från det. Det ska inte vara kontaminerat någonstans på vägen mellan sitt ursprung och din mun. Studier visar att det finns flera hälsovinster med att äta naturligt glutenfritt. För att jag ska kalla någonting naturligt glutenfritt så ska brödet inte innehålla:</p>' + 

		'<p>Vete  (kamut, spelt, durum, couscous, semolina, farro, bulgur, mannagryn mm.)' + 
		'<p>Råg</p>' +
		'<p>Korn</p>' +
		'<p>Havre (även s.k. ”ren”)</p>' +
		'<p>Vetestärkelse (även s.k. ”glutenfri”)</p>' + 
		'<p>Glukossirap (på vete)</p>' +
		'<p>Druvsocker, dextros (på vete)</p>' + 
		'<p>Maltodextrin (på vete, korn)' + 
		'<p>Sockerkulör (på vete)</p>' +

		'<p><i>Hur kan du baka bröd naturligt glutenfritt?</i><p>' + 
		'<p>Jag bakar med naturligt rena mjöler såsom bovete, majs, cassava, fröer, torkade bär, surdeg gjort på ris och en liten andel (0,3%) fermenterat rismjöl.</p>' +

		'<p><i>Varför Vegan?</i></p>' + 

		'<p>Att undvika animaliska produkter är ett sätt att undvika att stödja djurindustrins grymheter. Att äta veganskt innebär också att man bidrar till minskade koldioxid-utsläpp. Dessutom visar nya studier att det finns flera positiva hälsoskäll till en vegansk kosthållning.</p>');

	}

	$('#contact-form').submit(function (e) {

		$.ajax({
		  type: 'post',
		  url: '/sayHello',
		  data: $('#contact-form').serialize(),
		  success: function () {
		   $('#contact-form').append('<p>Email has been sent!</p>')
		  }
		});
		e.preventDefault();

	});
	var navBefore = $('.navbar-header').css('height');
	var navHeaderHeight;

	$('.collapse').on('show.bs.collapse', function () {

		navHeaderHeight	= $('.navbar').css('height');

		$('.navbar-header').css('height', navHeaderHeight);
		
		changeNavOnScrollDown();
	});
	$('.collapse').on('hide.bs.collapse', function () {

		pos = $('body').scrollTop();

		$('.navbar-header').css('height', navBefore);

		if(pos < 10) {
			changeNavbarOnScrollTop();
		}
	});

	var navBtnVis;
	var menuDown;
	window.addEventListener('click', function(e) {
		if(e.target.id !== '1') {

			$('#bubble-1').css('z-index', 0).css('display', 'none');
		}
		if(e.target.id !== '2') {

			$('#bubble-2').css('z-index', 0).css('display', 'none');
		}		
		if(e.target.id !== '3') {

			$('#bubble-3').css('z-index', 0).css('display', 'none');
		}

	});
	window.addEventListener('resize', function (e) {
		viewPort = {
				width: $(window).width(),
				height: $(window).height()
			};

	});
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
	modal.addEventListener('click', function() {
		$('#myModal').modal('toggle');
	})	
	modal2.addEventListener('click', function() {
		$('#myModal-2').modal('toggle');
	})
	modal3.addEventListener('click', function() {
		$('#myModal-3').modal('toggle');
	})
	navbar.addEventListener('click', function (ev) {
		
		if(ev.target.tagName === 'A' ) {
			$('.navbar-collapse').collapse('hide');
		}	
	});
	$('#go').mouseover(function() {
		$('#go-lb').css('left', '3%').css('opacity', 1);

	});
	$('#go').mouseleave(function() {
		$('#go-lb').css('opacity', 0).css('left', '-30%')
	});
	$('#super').mouseover(function() {
		$('#super-lb').css('opacity', 1).css('left', '3%');
	});
	$('#super').mouseleave(function() {
		$('#super-lb').css('opacity', 0).css('left', '-30%');
	});
	$('#sur').mouseover(function() {
		$('#sur-lb').css('opacity', 1).css('left', '3%');
	});
	$('#sur').mouseleave(function() {
		$('#sur-lb').css('opacity', 0).css('left', '-30%');
	});
	modalTrigger.addEventListener('click', function	(ev) {

		if(ev.target.id === '1') {
			console.log(1);
			// if(viewPort.width < viewPort.height) {

				// $('#myModal').modal('toggle');
			// }
			// else {

				$('#bubble-1').css('z-index', 300).css('display', 'block');

			// }
			$('#bee-one').css('display', 'block');
		}
		else if(ev.target.id === '2') {

			// if(viewPort.width < viewPort.height) {
			// 	$('#myModal-2').modal('toggle');
			// }
			// else {

				$('#bubble-2').css('z-index', 300).css('display', 'block');
			// }
			$('#bee-two').css('display', 'block');
		}
		else if(ev.target.id === '3') {
			// if(viewPort.width < viewPort.height) {
			// 	$('#myModal-3').modal('toggle');
			// }
			// else {

				$('#bubble-3').css('z-index', 300).css('display', 'block');
			// }
			$('#bee-three').css('display', 'block');
		}
	});
	eng.addEventListener('click', function () {
		switchLangToEnglish();

	});
	swe.addEventListener('click', function () {
		switchLangToSwedish();

	});

});