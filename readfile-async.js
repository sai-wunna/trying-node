const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

//_____________then/catch for promises_________**one file per function**_______
// getText('./textfolder/subfolder/testtwo.txt')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//_____________or saync/await for promises__________**two files per function**_____
const startread = async (path) => {
    try{
        let data = [];
        for( let i = 0; i < path.length ; i++){
            const file = await getText(path[i]);
            data.push(file);
        }
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

startread(['./textfolder/subfolder/test.txt', './textfolder/subfolder/testtwo.txt']);