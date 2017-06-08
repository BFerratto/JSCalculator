$(function(){
	var nodes = $('#calculator button');
	var screen = $('.screen');
	var operators = $('.opKey');
	nodes.each(function(_,node){
		console.log(node)
		var el = $(node)
		el.on('click', function(e){
			console.log('clicked',e)
			screen.html(screen.html()+''+el.html())
		})
	})
	$('button[value=C]').click(function(){
		screen.html('');
	});
	$('button[value="+"]').click(function(){
		if(screen.html() != ''){

		}
	});
});
