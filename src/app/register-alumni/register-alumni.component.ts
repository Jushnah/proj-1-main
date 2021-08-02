import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { AlumniModel } from './alumni.model';
import { MustMatch } from './mustmatch';

@Component({
  selector: 'app-register-alumni',
  templateUrl: './register-alumni.component.html',
  styleUrls: ['./register-alumni.component.css']
})



export class RegisterAlumniComponent implements OnInit {
 
   minDate = new Date(2010, 4, 12); 
  registerForm!: FormGroup;
  submitted = false;
  oppoSuits:any
  constructor(private formBuilder: FormBuilder,private authService:AuthService,public router:Router) {
    this.oppoSuits = ['Male', 'Female', 'Prefer Not to say']
   }
  alumniItem = new AlumniModel("","","","",0,"","","","",""); //template validate
  formdata = new FormData();
  date = new Date();  
  str = this.date.toDateString();  
  

  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      city: ['', Validators.required],
      course: ['', Validators.required],
      // dob:['',Validators.required],
      date: ['', Validators.required],
      gender: ['Select', Validators.required],

      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else{

      this.authService.newAlumni(this.registerForm.value);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successful!!!',
      showConfirmButton: false,
      timer: 3300
    })
    this.router.navigate(['/login']);

    }
    




    // const formdata = new FormData();
    //console.log(this.registerForm.value);


  }
}
