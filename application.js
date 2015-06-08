$(document).ready(function(){
	$('td').on('mouseenter', function() {
		$(this).closest('td').find('span').slideToggle();
	});
	$('td').on('mouseleave', function() {
		$(this).closest('td').find('span').slideToggle();
	});
});