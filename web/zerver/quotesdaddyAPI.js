var feedparser = require('../../node_modules/feedparser');

exports.getData = function(callback) {
	feedparser.parseUrl('http://www.quotesdaddy.com/feed/ugq').on('complete', callback);
}