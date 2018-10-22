$(document).ready(function() {
	var menuBtn = $('.top-nav_btn');
	var sidebarBtn = $('.left-sidebar_btn');
	var menu = $('.top-nav_menu');
	var sidebar = $('.left-sidebar_menu');

	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('top-nav_menu__active');
	});
	sidebarBtn.on('click', function(event) {
		event.preventDefault();
		sidebar.toggleClass('left-sidebar_menu__active');
	});




	var elem = document .querySelector( '.calc-range' );
	var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange:true, step: 100000 });
	var per, mount, result, total, mounthly;
	var money = +$('.calc-range').val();


	$('input[name="programms"]').on('change', function(event) {
		mount = +$(this).attr('data-mount');
		per = +$(this).attr('data-per');
		result = Math.round(per / 12 * mount * money);
		total = result + money;
		mounthly = parseInt(result / mount);
		$('#total').text(total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
		$('.calc-mounthly span').text(mounthly.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
		$('#mount').text(mount);
	});

	$('.calc-range').on('change', function(event) {
		$('.calc-summ_invest_num span').text($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
		var radio = $('input[name="programms"]:checked');
		money = +$(this).val()
		mount = +radio.attr('data-mount');
		per = +radio.attr('data-per');
		result = Math.round(per / 12 * mount * money);
		total = result + money;
		mounthly = parseInt(result / mount);
		$('#total').text(total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
		$('.calc-mounthly span').text(mounthly.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
	});

	});




function isVisible(elem) {

    var coords = elem.getBoundingClientRect();

    var windowHeight = document.documentElement.clientHeight;

    // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
    var topVisible = coords.top > 0 && coords.top < windowHeight;
    var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}

function showVisible() {
	var blocks = document.getElementsByClassName('directions-block');
	for (i = 0; i < blocks.length; i++) {
	  var block = blocks[i];
	  if (isVisible(block)) {
	    block.firstElementChild.classList.add('anim-right');
	    block.lastElementChild.classList.add('anim-left');
	  }
	}
}

  window.onscroll = showVisible;
  showVisible();