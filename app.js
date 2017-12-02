// filename : app.js
// author: royalflush
// 

var casper = require('casper').create();

function getTodayCount(){
	var _dev = document.querySelector('div.mheight').className;
	return _dev;
}

casper.start("https://www.olx.ua", function(){
	console.log("casper start");
	var side_today_count = this.evaluate(getTodayCount);
	console.log("Today Count:"  + side_today_count);

});

casper.run();