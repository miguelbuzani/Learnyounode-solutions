const web = require('http')
const bl = require('bl')
const async = require('async')

urls = [process.argv[2],process.argv[3],process.argv[4]]
contents = [] 

async.forEachOf(urls,(e)=>{
    web.get(e, function(req){
        //if(err) return console.error(err)
        try{
            req.pipe(bl(function (err, data){
                if(err) return console.error(err) 
                    console.log(data.toString())

      
            }))
        }catch(error){
            
        }
        
        //console.log(completeData.length+'\n'+completeData[0])

    }).on('error', (e)=>{
        console.error(e)
    })
})

// 'use strict'
//     const http = require('http')
//     const bl = require('bl')
//     const results = []
//     let count = 0

//     function printResults () {
//       for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }

//           results[index] = data.toString()
//           count++

//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }

//     for (let i = 0; i < 3; i++) {
//       httpGet(i)
//     }



//http://www.google.com/
//http://www.google.com/doodles
//http://www.google.com.mx/imgh
