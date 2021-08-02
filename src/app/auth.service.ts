import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumniModel } from './register-alumni/alumni.model';
import { EmployerModel } from './register-employer/employer.model';
import { UserModel } from './register/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user:any){
    //console.log("userrr",user);
    return this.http.post<any>("http://localhost:3000/login",user)
    console.log("userrr",this.http.post);

    //REDIRECTION THEN USE COMPONENT;S TS FILE
    // .subscribe((data)=>{
    //   console.log("LOGIN SUCCESSFUL");
      
    // });
  }

  constructor(private http: HttpClient){ }
  loggedIn()
  {
       
    return !!localStorage.getItem('token') //if token value exists when user logged in this value rturned is boolean !! is used Present /not
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  newUser(userItem: UserModel)
  {
     
    //console.log(userItem);
    
    return this.http.post("http://localhost:3000/newuser",{"user":userItem})
    .subscribe(data => {console.log(data);
    })
  }

  //FOR ALUMNI

  newAlumni(AlumniItem: AlumniModel)
  {
     
    console.log(AlumniItem);
    
    return this.http.post("http://localhost:3000/alumni/newuser",{"user":AlumniItem})
    .subscribe(data => {console.log(data);
    })
  }
  //for Employer
  newEmployer(empItem: EmployerModel)
  {
     
    //console.log(userItem);
    
    return this.http.post("http://localhost:3000/employer/newuser",{"user":empItem})
    .subscribe(data => {console.log(data);
    })
  }
  //JOB POSTING
  jobPost(jobitem:any)
  {   
    return this.http.post("http://localhost:3000/jobs/jobposting",{"job":jobitem})
    .subscribe(data =>{console.log(data)})
  }
  // //View jobs
  Viewjobs(){
    return this.http.get("http://localhost:3000/jobs/viewjobs");
  }
 
  Verifyjobs(){
    return this.http.get("http://localhost:3000/jobs/jobverify");
  }
  deletejob(id:any)
  {

    return this.http.delete("http://localhost:3000/jobs/remove/"+id)

  }
  editjob(job:any)
  {
    console.log(job)
    return this.http.put("http://localhost:3000/jobs/update",job)
    .subscribe(data =>{console.log(data)})
  }
  getjob(id:any){
    return this.http.get("http://localhost:3000/jobs/"+id);
  }
  
}
