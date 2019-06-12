const http = require('http');


http.createServer((req, res) => {
    res.end("HEllo Joon Server");
}).listen(3000);