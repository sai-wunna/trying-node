const https = require('https');
const { readFile, writeFile } = require('fs');

https.get('https://jsonplaceholder.typicode.com/todos', res => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    })

    res.on('end', () => {
        //_______write_test______AND____read_directly_test_____
        // writeFile('textfolder/subfolder/download-test.json', `${data}` , () => {
        //     console.log("Covid info file has been saved at textfolder/subfolder/download-test.js")
        // })

        readFile(data, () => {
            const file = JSON.parse(data);
            const condition = file.find( s => s.userId === 1 && s.completed === false);
            const result = JSON.stringify(condition);// change to string so it can be saved in .txt
            console.log(condition, result);
            writeFile('textfolder/subfolder/download-save.txt', result , () => {
                console.log("saved.....")
            })  
        })
        
        
    })
})