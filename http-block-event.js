const http = require('http');

//____a function that is nested in reponse make the reponse/reload slower___

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("This is our home page");
  } else if (req.url === '/about') {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i}`);
      }
    }
    res.end("This is our about page");
  } else {
    res.end(`
      <h1>Oops</h1>
      <a href="/">Back Home</a>
    `);
  }
});

server.listen(4000, () => {
    console.log("Server running at port 4000");
})