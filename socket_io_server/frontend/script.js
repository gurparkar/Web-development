const socket = io()

socket.on('connected', () =>{
 console.log('connected' + socket.id)
} )

$(function() {
    let msglist = $('#msglist')
    let sendbtn = $('#sendmsg')
    let msgbox =  $('#msgbox')

    sendbtn.click(function(){
        socket.emit('send_msg',{msg: msgbox.val()})
    })

    socket.on('recv_msg', function(data){
        msglist.append($("<li>"+data.msg+"</li>"))
    })
})

