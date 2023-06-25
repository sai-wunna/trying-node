const path = require('path');

// path data
// console.log(path);

const filepath = path.join('/textfolder', 'subfolder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);  // show the main target file name

const absolute = path.resolve(__dirname, 'textfolder', 'subfolder', 'test.txt');
console.log(absolute); // show from the C:\ to the main target file