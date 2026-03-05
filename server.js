"use strict";
//import array
const quotes = require('./arraymodule');
console.log(quotes); //test if array imports right

let http = require('http');
let server = (request, response) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        //formula for random array item
    response.writeHead(200, {"Content-type": "text"});
    response.write(randomQuote);
    response.end();
}
//creates local server on port 3000
http.createServer(server).listen(3000);
console.log('Server Started');

