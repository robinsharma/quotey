var feedparser = require('../../node_modules/feedparser');

exports.getData = function(callback) {
	feedparser.parseUrl('http://www.reddit.com/r/quotes/.rss').on('complete', callback);
}