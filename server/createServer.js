const http = require('http');

const server = http.createServer((req, res) => {
    // write here how to respond
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server</p>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기중입니다!');
});

server.on('error', (error) => {
    console.error(error);
});