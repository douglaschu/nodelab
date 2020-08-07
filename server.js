"use strict";
const quotes = require('./arraymodule');
console.log(quotes); //test if array exports right

let http = require('http');
let server = (request, response) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    response.writeHead(200, {"Content-type": "text"});
    response.write(randomQuote);
    response.end();
}
http.createServer(server).listen(3000);
console.log('Server Started');

