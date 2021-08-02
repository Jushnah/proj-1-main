import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobpostModel } from 'src/app/job.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobs-verify',
  templateUrl: './jobs-verify.component.html',
  styleUrls: ['./jobs-verify.component.css']
})
export class JobsVerifyComponent implements OnInit {
  jobs: JobpostModel[] = [];
  title:String = "Verify Jobs";
  job:any
  showJobs:boolean = false;
  constructor(private router:Router,public _auth:AuthService) {}

  ngOnInit(): void {
    this._auth.Verifyjobs().subscribe((data) =>{
      let length = (Object.keys(data).length);
     if(length != 0){
      this.showJobs=true;
    
      this.jobs = JSON.parse(JSON.stringify(data));
     }
    });
  }
  editjob(job:any)
  {
   // localStorage.setItem("editjobId", job._id.toString());
    this._auth.editjob(job);
    
    
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Done!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['dashboard']);
    
    
   

  }
  deletejob(job:any)
  {
    this._auth.deletejob(job._id)
      .subscribe((data1) => {
        this.jobs = this.jobs.filter(p => p !== job);
      })
    }
     

}
