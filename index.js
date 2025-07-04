const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 80; // changed from 3000 to 80

const server = createServer((req, res) => {
    if (req.url === '/services/ping') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('pong');
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World with test check ..... redeploy ------check');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

















