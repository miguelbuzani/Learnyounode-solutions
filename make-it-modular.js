const filefilter = require('C:/Users/Mike/source/repos/JS_tuto2/mymodule.js')

directory = process.argv[2]
extention = process.argv[3]

filefilter(directory, extention, function(error, filteredList){
    if (error) return console.error(error)
    filteredList.forEach(e => console.log(e))
})