// filename: request.js
// Request the first URL with CasperJS
// author: royalflushever 

var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
});

casper.start('https://www.olx.ua/detskiy-mir/?search%5Bprivate_business%5D=private');
casper.run();
