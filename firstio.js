const fs = require('fs')
numLine = fs.readFileSync(process.argv[2]).toString().split('\n')

console.log(numLine.length-1);












