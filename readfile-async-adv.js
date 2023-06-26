const { readFile , writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async(path) => {
    try{
        for ( let i = 0; i < path.length; i++ ){
            const file = await readFile(path[i], 'utf-8');
            await writeFile('./textfolder/subfolder/writetestADV.txt', file , {flag : 'a'});
        }
        console.log("read and write done");
    } catch (err) {
        console.log(err);
    }
}

start(['./textfolder/subfolder/test.txt', './textfolder/subfolder/testtwo.txt']);