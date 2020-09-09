const http = require('http');
const localhost = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request made');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, localhost , () => {
    console.log('listening for request on port 3000');
});