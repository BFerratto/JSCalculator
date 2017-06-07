$(function() {
	var nodes = $('#calculator span');
	var screen = $('.screen');
	var operators = ['+', '-', 'x', '÷'];
	nodes.each(function(_, node) {
		console.log(node)
		var el = $(node)
		el.on('click', function(e) {
			console.log('clickou', e)
			screen.html( screen.html() + ' ' + el.html())
		})
	})
})
// eval
