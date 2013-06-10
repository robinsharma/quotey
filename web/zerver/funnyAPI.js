var feedparser = require('../../node_modules/feedparser');

exports.getData = function(callback) {
	feedparser.parseUrl('http://www.quotesdaddy.com/feed/tagged/Funny').on('complete', callback);
}