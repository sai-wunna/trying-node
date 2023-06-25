const { readFileSync , writeFileSync } = require('fs');

console.log("reading file one");
const first = readFileSync('./textfolder/subfolder/test.txt', 'utf-8');

console.log("reading file two");
const second = readFileSync('./textfolder/subfolder/testtwo.txt', 'utf-8');

console.log("writing file");
const combineText = writeFileSync('./textfolder/subfolder/writeTest.txt', `hello this is test to writeFileSync ${first}, ${second}`, { flag : 'a'} ); // first-fileName second-text / flag is not to delete the existed text

console.log("Writing file done");