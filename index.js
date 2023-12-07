const http = require('http');
const fs = require('fs');

http.createServer(function(req,res) {
    let filePath = '';

    if (req.url === '/about') {
        filePath = './public/about.html';
    } else if (req.url === '/'){
        filePath = './public/index.html';
    } else {
        filePath = './public/404.html';
    }

    fs.readFile(filePath, function(err, content) {
        if (err) {
            res.writeHead(500);
            res.end('Server Error');
    } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });

}).listen(3000, () => {
    console.log('running on 3000')
});

