const { createServer } = require('node:http');

// change for checking pipeline

const hostname = '0.0.0.0';

const port = 3000;

const use = "For learning cicd triggers to pupeline take infinity";

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
