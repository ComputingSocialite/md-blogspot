$('#blog-pager-older-link > a').html("<span>Next</span><span class='glyphicon glyphicon-chevron-right'></span>");
$('#blog-pager-newer-link > a').html("<span class='glyphicon glyphicon-chevron-left'></span><span>Prev</span>");
$('.home-link').addClass('btn');
$('.blog-pager-older-link').addClass('btn');
$('.blog-pager-newer-link').addClass('btn'); 
$('.gsc-input').html( $('.gsc-input').html() + "<span class='glyphicon glyphicon-search'></span>");
$('.foot.section > .widget.Attribution > .widget-content').html('Copyright © 2016 Computing Socialite');
$('.popular-posts > ul > li').click( function() {
	var link = $(this).find('a').attr("href");
	window.location.href = link;
}); 