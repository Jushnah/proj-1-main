import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AlumniService } from 'src/app/alumni/alumni.service';
import { EmployerService } from 'src/app/job-hirer/employer.service';

import Swal from 'sweetalert2';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css']
})
export class AdminApprovalComponent implements OnInit {
Alumnicontent:boolean = false;
Employercontent:boolean = false;
Facultycontent:boolean = false;
  userId:any;
  userItem: any;
  userType:any;
  constructor(private router:Router,private userService: UsersService,
    private http: HttpClient,private flashMessage:FlashMessagesService,
    private alumniService: AlumniService,
    private empService: EmployerService,) {
    
   }

  ngOnInit(): void {
    this.userType = localStorage.getItem("editUserType");
    if(this.userType == "Alumni"){
          
      let userId: any = localStorage.getItem("editUserId");
      this.alumniService.getUser(userId).subscribe((data) => {
        this.userItem = JSON.parse(JSON.stringify(data));
        console.log(this.userItem);
      });
      this.Alumnicontent=true;
    }
    else if(this.userType == "Faculty"){
      let userId: any = localStorage.getItem("editUserId");
      this.userService.getUser(userId).subscribe((data) => {
        this.userItem = JSON.parse(JSON.stringify(data));
        console.log(this.userItem);
      });
      this.Facultycontent=true;
    }
    else if(this.userType == "Employer"){
      let userId: any = localStorage.getItem("editUserId");
      this.empService.getUser(userId).subscribe((data) => {
        this.userItem = JSON.parse(JSON.stringify(data));
        console.log(this.userItem);
      });
      this.Employercontent=true;
    }
   
    
  }
  editUser() {
    console.log(this.userType);
    if(this.userType=="Alumni"){
      console.log(this.userType);
      
      this.alumniService.editUser(this.userItem);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Done!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['adminhome']);

    }
    else if(this.userType==="Employer"){
      this.empService.editUser(this.userItem);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Done!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['adminhome']);

    }
    else if(this.userType==="Faculty"){
      this.userService.editUser(this.userItem);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Done!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['adminhome']);

    }
   
    else {
      this.flashMessage.show('Please Fill the details', { cssClass: 'alert-danger', timeout: 3000 });
    }


  }
  cancel(){
    this.router.navigate(['/dashboard']);
  }

}
