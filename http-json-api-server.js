var http = require('http');
var fs = require('fs');

var portNumber = process.argv[2];
var fileToRead = process.argv[3];

var server = http.createServer(function(request, response) {
    url = new URL(`http://${request.url}`);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    requestTime =new Date(url.searchParams.get('iso'))

    if(url.pathname === '/parsetime'){
        response.end(JSON.stringify({
            'hour': requestTime.getHours(),
            'minute': requestTime.getMinutes(),
            'second': requestTime.getSeconds()
        }))
    }else if(url.pathname === '/unixtime'){
        response.end(JSON.stringify({
            'unixtime': requestTime.getTime(),
        }))
    }

});

server.listen(portNumber);
