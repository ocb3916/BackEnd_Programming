const fs = require('fs');

fs.writeFile('output.txt', 'hello!', (error) => {
    console.log('file writing complete');
    console.log(`error: ${error} (null means no error)`);
});