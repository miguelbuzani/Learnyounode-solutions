const fs = require('fs')
const path = require('path')

module.exports = function (directory, extention, callback){

    var filteredFiles = []
    dotext = '.'+extention
    fs.readdir(directory, function FilteredLs(error, files){
        if (error) return callback(error)
        files.forEach(e =>{
            if (path.extname(e) == dotext){
                filteredFiles.push(e)
            } 
        })
        callback(null,filteredFiles)
    })
}
