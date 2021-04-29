const web = require('http')

url = process.argv[2]

web.get(url, function(req){
    //if(err) return console.error(err)
    req.setEncoding('utf8');
    req.on('data', (chunk)=>{
        console.log(chunk)
    })
}).on('error', (e)=>{
    console.error(e)
})