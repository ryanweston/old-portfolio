
$(document).ready(function() {
 	//Runs grained function (grained.js) in header container.
	grained('#header', {});

	//Allows override of Twitter widget styles.
	var widgetCSS = "" +
	    "body{font-family: 'Shadows Into Light', cursive;}" +
	    ".timeline-Header{background-color: purple; border-top-left-radius: 10px; border-top-right-radius: 10px;}" +
	    ".timeline-Header-title{color: black;}" +
	    ".timeline-Tweet-text{color: red;}";

	function paint(){
	  var w = document.getElementById("twitter-widget-0").contentDocument;

	  var s = document.createElement("style");
	  s.innerHTML = widgetCSS;
	  s.type = "text/css";
	  w.head.appendChild(s);
	}


	// Code below calls random gif from the GIPHY API after countdown duration.
	// Initiate gifLoop for set interval
	var refresh;
	// Duration count in seconds
	const duration = 1000 * 10;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		key: "dc6zaTOxFJmzC",
		tag: "fail",
		type: "random",
		rating: "pg-13"
	};
	// Target gif-wrap container
	const $gif_wrap = $("#header");
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.key +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		// Set gif as bg image
		$gif_wrap.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});

		// Start duration countdown
		refreshRate();
	};

	// Call for new gif after duration
	var refreshRate = () => {
		// Reset set intervals
		clearInterval(refresh);
		refresh = setInterval(function() {
			// Call Giphy API for new gif
			newGif();
		}, duration);
	};

	// Call Giphy API for new gif
	newGif();
});
