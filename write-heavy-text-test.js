const { writeFileSync } = require('fs');
for( let i = 0; i < 100 ; i++ ){
    writeFileSync('./textfolder/subfolder/bigtext.txt', ` Hello world ${i}\n` , { flag : 'a' })
}