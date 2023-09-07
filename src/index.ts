import http from 'http';
import fs from 'fs';

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request URL: ', req.url);
  if (req.url === '/') {
    fs.readFile('src/assets/index.html', (err, data) => {
      res.setHeader('Content-Type', 'text/html');
      res.end(data.toString());
    });
  } else if (req.url === '/css') {
    fs.readFile('src/assets/styles.css', (err, data) => {
      res.setHeader('Content-Type', 'text/css');
      res.end(data.toString());
    });
  } else if (req.url === '/logo-lightblue-2642-991.png') {
    fs.readFile('src/assets/logo-lightblue-2642-991.png', (err, data) => {
      res.setHeader('Content-Type', 'image/png');
      res.end(data);
    });
  } else if (req.url === '/stormbound-icon.png') {
    fs.readFile('src/assets/stormbound-icon.png', (err, data) => {
      res.setHeader('Content-Type', 'image/png');
      res.end(data);
    });
  }
});

server.listen(3002);

console.log('Server started!');
