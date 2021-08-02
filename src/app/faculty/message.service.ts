import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  
  getMessages(){
    return this.http.get("http://localhost:3000/messages");
  }

  newMessage(item: { username: string; email: string; date: string; subject: string; message: string; expanded: boolean; }){
    return this.http.post("http://localhost:3000/insertMessage",{"message":item})
    .subscribe(data=>{
      console.log(data)
    })
  } 

}
