var http = require('http');
var { createReadStream } = require('fs');

http.createServer( function (req, res) {
    //_____read file in chunks__________
    const fileStream = createReadStream('./textfolder/subfolder/bigtext.txt', 'utf8');
    fileStream.on('open', () => {
        //_____if we use normal res.end(data)__it make slower maybe______
        //_____pipe() send data in chunks_______
        //___instead of res.end / use pipe(res) to reponse (send big file size data)__
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(4000 , () => {
    console.log("Server is running at port 4000.....")
});