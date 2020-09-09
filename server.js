const http = require('http'); // http module
const fs = require('fs') // file system module

const localhost = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request made', req.url, req.method);
    res.statusCode = 200; // 200 - ok, 301 - Resource moved, 404 - not found, 500 - internal errror.
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(port, localhost , () => {
    console.log('listening for request on port 3000');
});