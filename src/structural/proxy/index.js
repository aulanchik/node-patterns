var path = require('path');
var FileSystem = require('./fileSystem');
var fs = new FileSystem();

var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {
    if(error) {
        console.log('\x07');
        console.log(error);
        process.exit(0);
    }

    console.log('Reading contents of the file... \n');
    console.log(contents);
}

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
