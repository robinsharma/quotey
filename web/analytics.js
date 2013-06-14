/**
 * Kik Cards
 * Copyright (c) 2012 Kik Interactive, http://kik.com
 * All rights reserved
*/

(function (window, document) {
	// create _gaq early so we can setup events
	var _gaq = window._gaq = [];
	_gaq.push(['_setAccount', 'UA-41660805-1']);
	_gaq.push(['_trackPageview']);

	window.addEventListener('error', function (e) {
		var errorFile    = (e.filename || window.location.href),
			errorLine    = e.lineno  || 0,
			errorMessage = e.message || '';

		window._gaq.push([
			'_trackEvent' ,
			'Error'       ,
			errorFile     ,
			errorMessage  ,
			errorLine
		]);
	}, false);

	cards.metrics.enableGoogleAnalytics();
	App.enableGoogleAnalytics();

	// wait until all other assets are loaded to not block pageLoaded
	cards.ready(function () {
		var ga = document.createElement('script');
		ga.async = true;
		ga.defer = true;
		ga.id = 'ga';
		ga.src = '//www.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	});
})(window, document);