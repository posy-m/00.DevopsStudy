const net = require('net')

const socket = net.connect({
  port: 3000,
  host: 'localhost'
})

socket.on('connect', () => {
  console.log(' CLIENT : 나 연결 됐음');
  socket.write('hello world!') // 데이터를 보내겠당!
})