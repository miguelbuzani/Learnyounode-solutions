const fs = require('fs')
const path = require('path')

directory = process.argv[2]
extention = process.argv[3]

fs.readdir(directory, function (error, files){
    if (error) return console.error(error)
    files.forEach(e =>{
        if (path.extname(e) == '.'+extention)
        console.log(e)
    })
})