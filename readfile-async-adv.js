const { readFile , writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


//____the arg must be array_______currently not work for several files//only one works__
const start = async (path) => {
    try{
        for ( let i = 0; i < path.length; i++ ){
            const file = await readFile(path[i], 'utf-8');
            console.log(` ${i} read done`)
            await writeFile(`textfolder/subfolder/writetestADV.txt`, `//__No ${i} : ${file}` , { flag : 'a'});
            console.log(` ${i} write done`);
        }
        console.log("read and write done");
    } catch (err) {
        console.log(err);
    }
}

start(['./textfolder/subfolder/test.txt', './textfolder/subfolder/testtwo.txt']);