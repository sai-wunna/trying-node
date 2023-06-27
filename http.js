const http = require('http');

const server = http.createServer((req, res) => {
    try {
        if (req.url === '/') {
            res.end('Welcome to Home Page');
        } else if (req.url === '/history') {
            res.end('This is our history');
        } else {
            res.end(`
                <h1>Oops!</h1>
                <p>There is nothing</p>
                <a href="/">Back Home</a>
            `);
        }
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

server.listen(4000, () => {
    console.log("The server is running at port 4000")
} );