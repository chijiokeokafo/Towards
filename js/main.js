// Shorthand for $( document ).ready()
$(function() {
	console.log("ready!");

	document.body.addEventListener('click', menu);

	var men = 0;

	$("#menu-button").click(function() {
		console.log("clicked");

		$("#main-nav").toggleClass("show");
		$("body").toggleClass("clickable");

	});

	function menu() {
		men++
		if (($("#main-nav").attr("class") == "hide show") && (men > 1)) {
			$("#main-nav").toggleClass("show");
			$("body").toggleClass("clickable");
			men = 0;
			console.log(men);
		} else {
			console.log("no");
		}
	}

	var waypoint = new Waypoint({
		element: document.getElementById('lightbox'),
		handler: function() {
			console.log("THIS");
			$("body").toggleClass("black");
		}
	});

});