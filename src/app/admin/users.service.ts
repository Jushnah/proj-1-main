import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  faculties= {
    userid:'',
     username : '',
     user_email : '',
     password : '',
     phone_number : '',
  }
  constructor(private http:HttpClient) { }
  getUser(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getUsers(){
    return this.http.get("http://localhost:3000/users");
  }
  Verifyusers(){
    return this.http.get("http://localhost:3000/verify");
  }
  // newUser(item: ProductModel)
  // {
  //   return this.http.post("http://localhost:3000/insert",{"product":item})
  //   .subscribe(data => {console.log(data);
  //   })
  // }
  deleteUser(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editUser(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
  readmore(id:any){
    console.log("hereeeeeeeeeeeeeee");
    
    return this.http.get("http://localhost:3000/"+id);

  }
}
