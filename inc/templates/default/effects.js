function setup_items() {
	$('#main .item')
		.children('.excerpt')
			.hide()
			.parent()
				.addClass('c1')
				.removeClass('c2')
			.end()
		.end()
		.children('h1')
			.css( {cursor:'pointer'} )
			.click(function() {
				$(this).next().slideToggle();
			})
		.end()
		.children('.title')
			.click(function() {
				$(this)
					.siblings('.excerpt')
						.slideToggle()
					.parent()
						.toggleClass('c1')
						.toggleClass('c2');
				return false;
			});
}

/* JQuery Stuff! */
$(document).ready(function() {

	/* Setup our global buttons */
	$('.river-page #expandall').css({cursor:'pointer'}).click(function() {
		
		$('.excerpt').slideDown();
		$('.item').removeClass('c2').addClass('c1');
		
		return false;
	});
	$('.river-page #collapseall').css({cursor:'pointer'}).click(function() {
		
		$('.excerpt').slideUp();
		$('.item').addClass('c1').removeClass('c2');
		
		return false;
	});
	
	/* Ajax loading if no items are found */
	$('.river-page #viewallitems').click(function() {
		$('#main').load('index.php?hours=-1 #main', {}, function () {
			setup_items();
		});
		
		return false;
	});
	
	/* Per-item setup */
	setup_items();
});