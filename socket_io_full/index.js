const express = require('express')

const path = require('path')

const socketio = require('socket.io')

const http = require('http')

const app = express()

const server = http.createServer(app)

const io = socketio(server)

let usersockets = {}

io.on('connection', function(socket){
    console.log('a user connected'+ socket.id);
    socket.emit('connected')

    socket.on('login',(data)=>{
          usersockets[data.user] = socket.id
          console.log(usersockets)

    })

    socket.on('send_msg', function(data){

           if (data.msg.startsWith("@")){
               
                let recipient = data.msg.split(':')[0].substr(1)
                let rcptSocket = usersockets[recipient]
                io.to(rcptSocket).emit('recv_msg',data)

           }else{
                socket.broadcast.emit('recv_msg',data)
           }
          
       // io.emit('recv_msg',data)
    })
  });

app.use('/', express.static(path.join(__dirname, 'frontend')))

server.listen(2345, ()=> { console.log("Website started on http://localhost:2345")})