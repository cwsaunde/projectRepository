var app = require('http').createServer(createServer);
var fs = require('fs'); 
var url = require('url');

function createServer(req, res) {
    var path = url.parse(req.url).pathname;
    var fsCallback = function(error, data) {
        if(error) throw error;

        res.writeHead(200);
        res.write(data);
        res.end();
    }

    switch(path) {
        case '/login':
            fs.readFile(__dirname +'/login.html', fsCallback);
        break;
        // case '/':
        //     fs.readFile(__dirname +'/', fsCallback);
        // break;
        // case '/':
        //     fs.readFile(__dirname +'/', fsCallback);
        // break;
        default:
            fs.readFile(__dirname + '/login.html', fsCallback);
        break;
    }
};

app.listen(8080);
console.log("The Web Server is live\n");
console.log("It's listening on http://127.0.0.1:8080");