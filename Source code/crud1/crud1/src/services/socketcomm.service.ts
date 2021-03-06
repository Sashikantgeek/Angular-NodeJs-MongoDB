import { OnInit } from "@angular/core";
import * as io from 'socket.io-client';
import { Observable } from "rxjs";


export class Socketcomm implements OnInit{
private socket = "";//io("http://localhost:3000");

ngOnInit(){
    
}

joinRoom(user,room){
    console.log('Inside the service joinRoom')
this.socket.emit('new_joinee',{
    name : user,
    room : room
});
}
//client_new_msg
serverNewMessage(){
    return new Observable((observer)=>{
this.socket.on('server_new_message',(data)=>{

        observer.next(data);
    });
})
}
sendMessageClient(user,msg,room)
{
    console.log('Inside the service ',{
        name : user,
        msg : msg,
        room : room
    })
    this.socket.emit('client_new_msg',{
        name : user,
        msg : msg,
        room : room
    })
}
serverJoinRoom(){
    return new Observable((observer)=>{
this.socket.on('server_new_joinee',(data)=>{

        observer.next(data);
    });
})

} 

}