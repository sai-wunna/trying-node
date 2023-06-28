const { createReadStream } = require('fs');

//__readStream to load big data size files____
//____highWaterMark--can be add to control size________
const stream = createReadStream('./textfolder/subfolder/bigtext.txt', {
   highWaterMark: 90000 , encoding : 'utf-8'
})

stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) => {
    console.log(err);
})