import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';
import { FacultyService } from 'src/app/faculty/faculty.service';


import { UserModel } from 'src/app/register/user.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})

export class WrapperComponent implements OnInit {
  isExpanded: boolean = true;
  isExpanded1: boolean = false;

  facultyinfo= [{
    userid:'',
     username : '',
     user_email : '',
     password : '',
     phone_number : '',
  }]
  constructor(private authservice: AuthService,public router:Router,private facultyservice:FacultyService) { }

  ngOnInit(): void {
    this.facultyservice.getUsers().subscribe((data)=>{
      this.facultyinfo=JSON.parse(JSON.stringify(data));
      console.log("infoooooo",this.facultyinfo);
  });
}

  editfaculty(faculties:any)
  {

    
    localStorage.setItem("editfacultyId" ,faculties.userid. toString());
    console.log(faculties.userid);
    console.log("wrapper page");
    console.log(localStorage);
    
    //this.router.navigate(['']);

  }
}
