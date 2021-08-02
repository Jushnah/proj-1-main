import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniService } from '../alumni/alumni.service';
import { AuthService } from '../auth.service';
import { EmployerService } from '../job-hirer/employer.service';
import { AlumniModel } from '../register-alumni/alumni.model';
import { EmployerModel } from '../register-employer/employer.model';
import { UserModel } from '../register/user.model';
import { UsersService } from './users.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title:String = "Admin-Home Page";
  users: UserModel[] = [];
  alumnis: AlumniModel[] = [];
  emps: EmployerModel[] = [];
  editUserId: any;
  showFaculty:boolean=false;
  showEmp:boolean=false;
  showAlumni:boolean=false;
  show:boolean=false;
  
  constructor(private userservice: UsersService,private router:Router,
    public _auth:AuthService,private alumniservice: AlumniService,
    private empservice: EmployerService) {}

  ngOnInit(): void {
    this.userservice.Verifyusers().subscribe((data) =>{
     let length = (Object.keys(data).length);
     if(length != 0){
      this.showFaculty=true;
      this.users = JSON.parse(JSON.stringify(data));
     }
     
            
      })
    this.alumniservice.Verifyusers().subscribe((data1) =>{
      let length = (Object.keys(data1).length);
      if(length != 0){
       this.showAlumni=true;
      this.alumnis = JSON.parse(JSON.stringify(data1));
      
      }
     
    })
    this.empservice.Verifyusers().subscribe((data2) =>{
      let length = (Object.keys(data2).length);
      if(length != 0){
       this.showEmp=true;     
      this.emps = JSON.parse(JSON.stringify(data2));
     
      }
    })   
   
  }
  editUser(user:any)
  {
    localStorage.setItem("editUserId", user._id.toString());
    localStorage.setItem("editUserType", "Faculty");
    
    this.router.navigate(['/adminapproval']);

  }
  readmore(user:any)
  {
    localStorage.setItem("editUserId", user._id.toString());
    console.log(user._id);
    this.userservice.readmore(user._id)
    
   
    
    this.router.navigate(['/adminapproval']);
    
  
  }
  deleteProduct(user:any)
  {
    this.userservice.deleteUser(user._id)
      .subscribe((data) => {
        this.users = this.users.filter(p => p !== user);
      })
  

  }

//ALUMNI
editAlumni(alumni:any)
  {
    localStorage.setItem("editUserId", alumni._id.toString());
    localStorage.setItem("editUserType", "Alumni");
  
    
    
    this.router.navigate(['/adminapproval']);

  }
  deleteAlumni(alumni:any)
  {
    this.alumniservice.deleteUser(alumni._id)
      .subscribe((data1) => {
        this.alumnis = this.alumnis.filter(p => p !== alumni);
      })
    }

//EMPLOYERS
editEmployer(emp:any)
  {
    localStorage.setItem("editUserId", emp._id.toString());
    localStorage.setItem("editUserType", "Employer");

    
    this.router.navigate(['/adminapproval']);

  }
  deleteEmployer(emp:any)
  {
    this.empservice.deleteUser(emp._id)
      .subscribe((data2) => {
        this.emps = this.emps.filter(p => p !== emp);
      })
    }
}
