// filename : app.js
// author: royalflush
// 
var casper = require('casper').create({
    verbose: true
    // , logLevel: "debug"
    , pageSettings: {
        userAgent: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    }
});
var links;

function getTodayCount(){
	var link = document.querySelector('h3.x-large.lheight20.margintop5 a').getAttribute('href');

	return link;
}

function getLinks() {
	var elements = __utils__.findAll('#body-container div.inner a.linkWithHash');
	return elements.map(function(e) {
		return e.getAttribute('href');
	});
	
}

// casper.start("https://www.olx.ua/detskiy-mir/?search%5Bprivate_business%5D=private", function(){
// 	console.log("casper start");
// 	var side_today_count = this.evaluate(getTodayCount);
// 	console.log("Today Count:"  + side_today_count);

// });

casper.start('https://www.olx.ua', function() {
	console.log("casper start");
	console.log("Links");

    links = this.evaluate(getLinks);
});

casper.run(function() {
	this.echo(links.length);
    this.echo(JSON.stringify(links)).exit();
});


// casper.run();