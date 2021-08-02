import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UsersService } from 'src/app/admin/users.service';
import { AlumniService } from 'src/app/alumni/alumni.service';
import { AuthService } from 'src/app/auth.service';
import { EmployerService } from 'src/app/job-hirer/employer.service';
import { AlumniModel } from 'src/app/register-alumni/alumni.model';
import { EmployerModel } from 'src/app/register-employer/employer.model';
import { UserModel } from 'src/app/register/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title:String = "Admin-Home Page";
  users: UserModel[] = [];
  alumnis: AlumniModel[] = [];
  emps: EmployerModel[] = [];
  editUserId: any;
  showFaculty:boolean=true;
  showEmp:boolean=true;
  showAlumni:boolean=true;
  show:boolean=false;
  
  constructor(private userservice: UsersService,private router:Router,
    public _auth:AuthService,private alumniservice: AlumniService,
    private empservice: EmployerService) {}

  ngOnInit(): void {
    this.userservice.getUsers().subscribe((data) =>{
     
      this.users = JSON.parse(JSON.stringify(data));
     
     
            
      })
    this.alumniservice.getUsers().subscribe((data1) =>{
     
      this.alumnis = JSON.parse(JSON.stringify(data1));
      
      
     
    })
    this.empservice.getUsers().subscribe((data2) =>{
     
      this.emps = JSON.parse(JSON.stringify(data2));
     
      
    })   
   
  }
    cancel(){
      this.router.navigate(['adminhome']);
    }
}
