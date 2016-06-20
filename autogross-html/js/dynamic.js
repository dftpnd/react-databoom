$(function() {
	$('select').change(function () {
		if ( $(this).val() == '0' ) {
			$(this).addClass('default');
		} else {
			$(this).removeClass('default');
		}
	});
	$('select').change();
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$('.upload').on('click', function() {
		$(this).siblings('input[type="file"]').trigger('click');
	});
	$('.data-f .item div').each(function() {
		if ( $(this).find('input').is(':checked') ) {
			$(this).find('.yes').addClass('active');
		} else {
			$(this).find('.no').addClass('active');
		}
	});
	$('.data-f .item div span').on('click', function() {
		$(this).addClass('active').siblings('span').removeClass('active');
		if ( $(this).hasClass('yes') ) {
			$(this).siblings('input').prop('checked',true);
		} else {
			$(this).siblings('input').prop('checked',false);
		}
	});
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('.equip-b select').each(function() {
		if ( $(this).parent().find('input').prop('checked') == true ) {
			$(this).prop('disabled',false);
		} else {
			$(this).prop('disabled',true);
		}
	});
	$('.equip-b select').parent().find('input').change(function() {
		if ( $(this).prop('checked') == false ) {
			$(this).parents('p').find('select').prop('disabled',true);
		} else {
			$(this).parents('p').find('select').prop('disabled',false);
		}
	});
	function progressScale() {
		if ( $('.wrapper > div').width() < 1080 ) {
			var r = $('.wrapper > div').width()/1080;
			var m = -40*(1-r)+34;
		} else {
			var r = 1;
			var m = 34;
		}
		$('.progress').css({
			'margin-bottom': m+'px',
			'-webkit-transform': 'scale('+r+')',
			'transform': 'scale('+r+')'
		});
	}
	function carScale() {
		if ( $('.data-f').width() < 971 ) {
			var r = $('.data-f > div').width()/931;
			var m = -592*(1-r)+46;
		} else {
			var r = 1;
			var m = 46;
		}
		$('.damage-visual > div').css({
			'margin-bottom': m+'px',
			'-webkit-transform': 'scale('+r+')',
			'transform': 'scale('+r+')'
		});
	}
	$(window).resize(function() {
		progressScale();
		carScale();
	});
	$(window).trigger('resize');
	$('.modal').append('<span class="close"></span>');
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(400);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( h < $(window).scrollTop()+40 ) {
			h = $(window).scrollTop()+40;
		}
		if ( h < $('header').height()+40 ) {
			h = $('header').height()+40;
		}
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(400);
	});
	$('.fade, .modal .close').on('click', function(e) {
		$('.fade, .modal').stop(true,true).fadeOut(400);
	});
	$('.damage-visual span').each(function() {
		$(this).css({
			'left': $(this).attr('data-left')+'px',
			'top': $(this).attr('data-top')+'px'
		});
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$('.tabs-nav a').on('click', function(e) {
		e.preventDefault();
		$('[data-tab="'+$(this).attr('href')+'"]').show().siblings('[data-tab]').hide();
		$(this).parent().addClass('active').siblings().removeClass();
	}).filter(':first').click();
	$('[data-preview]').on('click', function(e) {
		e.preventDefault();
		$('[data-big]').hide();
		$('[data-big="'+$(this).attr('data-preview')+'"]').show();
	}).filter(':first').click();
	$('.zoom').fancybox({
		padding: 0,
		helpers: {
			title	: {
				type: 'outside'
			},
			thumbs: {
				width: 110,
				height: 80
			}
		}
	});
});