const socket = io()

socket.on('connected', () =>{
 console.log('connected' + socket.id)
} )

$(function() {
    let msglist = $('#msglist')
    let sendbtn = $('#sendmsg')
    let msgbox =  $('#msgbox')
    let loginbox = $('#loginbox')
    let loginbtn = $('#loginbtn')
    let loginDiv = $('#login-div')
    let chatDiv = $('#chat-div')
    let user = ''

    sendbtn.click(function(){
        socket.emit('send_msg',{
            user : user,
            msg: msgbox.val()})
    })

    loginbtn.click(function() {

         user = loginbox.val()
         chatDiv.show()
         loginDiv.hide()
         socket.emit('login',{
             user : user
         })

    })

    socket.on('recv_msg', function(data){
        msglist.append($("<li>"+data.user+":"+data.msg+"</li>"))
    })
})

