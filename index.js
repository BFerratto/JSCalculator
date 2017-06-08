$(function() {
  var v1, v2, op;
  var nodes = $(".numKey");
  var screen = $(".screen");
  var operators = $(".opKey");
  nodes.each(function(_, node) {
    var el = $(node);
    el.on("click", function(e) {
      screen.html(screen.html() + "" + el.html());
    });
  });
  $("button[value=C]").click(function() {
    screen.html("");
		v1 = 0;
		v2 = 0;
  });
 $('button[value="+"]').click(function() {
    if (screen.html() != "") {
      v1 = parseFloat(screen.html());
			console.log('+', {v1})
      screen.html("");
      op = "+";
      $("opKey").text($(this).html());
    } else {
      alert("Insira numero");
    }
  });
	$('button[value="-"]').click(function() {
		if (screen.html() != "") {
			v1 = parseFloat(screen.html());
			screen.html("");
			op = "-";
			$("opKey").text($(this).html());
		} else {
			alert("Insira numero");
		}
	});
	$('button[value="x"]').click(function() {
		if (screen.html() != "") {
			v1 = parseFloat(screen.html());
			screen.html("");
			op = "x";
			$("opKey").text($(this).html());
		} else {
			alert("Insira numero");
		}
	});
	$('button[value="÷"]').click(function() {
		if (screen.html() != "") {
			v1 = parseFloat(screen.html());
			screen.html("");
			op = "÷";
			$("opKey").text($(this).html());
		} else {
			alert("Insira numero");
		}
	});
	$('button[value="="]').click(function(){
		console.log("clickou no igual")
		v2 = parseFloat(screen.html());
		screen.html("");
		console.log({v2}, op);
		var finalValue=0;
		switch (op) {
			case "+":
				finalValue = v1+v2;
			break;
			case "-":
				finalValue = v1-v2;
			break;
			case "x":
				finalValue = v1*v2;
			break;
			case "÷":
				finalValue = v1/v2;
			break;
		}
		v1= 0;
		op = null;
		screen.html(finalValue.toFixed(2));
})
});
