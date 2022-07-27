var $ = jQuery;


$(document).ready(function() {

	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
		function()
		{
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
			{
				tallestcolumn = currentHeight;
			}
		}
		);
		columns.height(tallestcolumn);
	}

	setEqualHeight($(".align-h > div > div"));


	$('.popup_content').on('click', '#thumbs img', function(e){
	e.preventDefault();
	$srcImg = this.src;
	$('#thumbs img').removeClass('active');
	$(this).addClass('active');
	    $('#largeImg img')
	    .fadeOut(400, function() {
	        $("#largeImg img").attr('src', $srcImg);
	        
	    })
	    .fadeIn(400);});


	$('.popup_content').on('click', '.close-popup', function(e){
		e.preventDefault();
	  $('.popup').removeClass('visible');
	});

	$('.item-wrapper').click(function(){
	    $('.popup').addClass('visible');

	});


});