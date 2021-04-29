const web = require('http')
const bl = require('bl')

url = process.argv[2]

web.get(url, function(req){
    //if(err) return console.error(err)
    req.setEncoding('utf8');
    dataString = ''
    req.pipe(bl(function (err, data){
        if(err) return console.error(err)
        dataString += data
    }))
    req.on('end', () =>{
        console.log(dataString.length+'\n'+dataString)
    })
}).on('error', (e)=>{
    console.error(e)
})