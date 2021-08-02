import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobpostModel } from 'src/app/job.model';
import { MustMatch } from 'src/app/register-alumni/mustmatch';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  minDate = new Date(2010, 4, 12); 
  JobpostForm!: FormGroup;
  submitted = false;
  oppoSuits:any
  constructor(private formBuilder: FormBuilder,private authService:AuthService,public router:Router) {
    this.oppoSuits = ['Full-time', 'Part-time', 'Internship','Contract','Volunteer','Temporary']
   }
  iItem = new JobpostModel("","","","","","","",0,"",""); //template validate
  formdata = new FormData();
  date = new Date();  
  str = this.date.toDateString();  
  
  ngOnInit(): void {

    this.JobpostForm = this.formBuilder.group({
      jobtitle: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      joblocation: ['', Validators.required],
      exdate: ['', Validators.required],
      qualification: ['', Validators.required],
      type: ['Select', Validators.required],
      requirements:['',Validators.required],
      nojobs: ['', Validators.required],
      description: ['', Validators.required],

    });
  }
  get f() { return this.JobpostForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.JobpostForm.invalid) {
      return;
    }
    else{

      this.authService.jobPost(this.JobpostForm.value);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successful!!!',
      showConfirmButton: false,
      timer: 3300
    })
    this.router.navigate(['/adminhome']);

    }
    




  }
}
