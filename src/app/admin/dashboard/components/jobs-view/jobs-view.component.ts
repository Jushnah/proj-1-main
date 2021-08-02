import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobpostModel } from 'src/app/job.model';

@Component({
  selector: 'app-jobs-view',
  templateUrl: './jobs-view.component.html',
  styleUrls: ['./jobs-view.component.css']
})
export class JobsViewComponent implements OnInit {
  jobs: JobpostModel[] = [];
  title:String = "Verify Jobs";
  job:any
  job2:any
  jobnw:any;
  showjob:boolean = false;
  
  constructor(private router:Router,public _auth:AuthService) {}

  ngOnInit(): void {
    this._auth.Viewjobs().subscribe((data) =>{
         
      this.jobs = JSON.parse(JSON.stringify(data));
     
    });
   
    let jobId: any = localStorage.getItem("editjobId");
     
   this._auth.getjob(jobId).subscribe((data2) =>{
    
    this.jobnw = JSON.parse(JSON.stringify(data2));
    console.log(this.jobnw);
   });
  }
  viewjob(job:any)
  {
   
    localStorage.setItem("editjobId", job._id.toString());
    console.log(job);
    
    this.showjob=true;
    this.router.navigate(['/job']);
        
    
    
   

  }

}
