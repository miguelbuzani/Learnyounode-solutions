const net = require('net')
const strftime = require('strftime')

port  = process.argv[2]

const server = net.createServer((socket) => {
    data = Date.now();
    socket.end(strftime('%Y-%m-%d %H:%M')+'\n');
    socket.on('end', () => {
        console.log('client disconnected');
    });
})
server.listen(port)