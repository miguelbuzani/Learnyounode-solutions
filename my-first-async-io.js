const fs = require('fs')
numLine = undefined

fs.readFile(process.argv[2], function getLines(error, fileData){
    if (error) return console.error(error)
    numLine = fileData.toString().split('\n')
    console.log(numLine.length-1);
})

