$(document).ready(function(){
	function showText() {
		$(this).closest('td').find('span').slideToggle();
	}

	$('td').on('mouseenter', showText);
	$('td').on('mouseleave', showText);
});