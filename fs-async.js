const { readFile , writeFile } = require('fs');

console.log("Starting read write files");

readFile('./textfolder/subfolder/test.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./textfolder/subfolder/testtwo.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile('./textfolder/subfolder/fs-adv.txt', `The Advane error handling and fast way of fs : ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Read and write is done")
        });
    })
})

console.log("Everything is done");