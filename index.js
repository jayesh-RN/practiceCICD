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
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Hello World</title>
        </head>
        <body style="margin:0; font-family: Arial, sans-serif; background: linear-gradient(120deg, #6a11cb, #2575fc); color:white; display:flex; align-items:center; justify-content:center; height:100vh;">
            <div style="text-align:center;">
                <h1 style="font-size:3rem; margin-bottom:10px;">Hello World</h1>
                <p style="font-size:1.2rem;">With test check... redeploy — check ✔️</p>
            </div>
        </body>
        </html>
    `);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

















