import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobpostModel } from 'src/app/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobs: JobpostModel[] = [];
  title:String = "Verify Jobs";
  job:any
  job2:any
  jobnw:any;
  showjob:boolean = false;
  
  constructor(private router:Router,public _auth:AuthService, private http: HttpClient) {}
  ngOnInit(): void {
      let jobId: any = localStorage.getItem("editjobId");
     
   this._auth.getjob(jobId).subscribe((data2) =>{
    
    this.jobnw = JSON.parse(JSON.stringify(data2));
    console.log(this.jobnw);
    
   
    
   
  });
  }

}
