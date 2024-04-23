const fs = require('fs');

fs.readFile('none.txt', (error, file) => {
    if (error) {
        console.log('there is error as reading file.');
        console.log(error);
    } else {
        console.log(file);
        console.log(file.toString());
    }
});