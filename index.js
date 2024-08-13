var http = require('http');
var hostname = '127.0.0.1';
var port = 8787;

const server = http.createServer(function (req, res) {
  // console.log('REQUEST: ', req);
  // res.end('hello Client!');
  const path = req.url; // 클라이언트가 요청한 경로
  const method = req.method;
  // console.log(path);
  if (path === '/products') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const products = JSON.stringify([
        {
          name: '농구공',
          price: 50000,
        },
      ]);
      res.end(products);
    } else if (method === 'POST') {
      res.end('생성되었습니다.');
    }
  }
  res.end('Good Bye');
});

server.listen(port, hostname);

console.log('grab market server on!');
