const { createServer } = require('node:http');

// change for checking pipeline ---------------------------------- let's see

const hostname = '0.0.0.0';

const port = 3000;

const use = "For learning cicd triggers to pupeline take infinity + 1";

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World with test 7');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
