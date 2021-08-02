import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/faculty/faculty.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/faculty/message.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registerForm!: FormGroup;
  //imageSrc: string;
  gridColumns = 3;
  minDate = new Date(2010, 4, 12); 
  formdata = new FormData();
  constructor( private facultyservice:FacultyService,
               private formBuilder: FormBuilder,
               private messageService:MessageService) { }
  facultyinfo= {
    userid:'6102365b9b787a22e02789aa',
     username : '',
     lastname: '',
     user_email : '',
     password : '',
     phone_number : '',
     skills:'',
     dateofjoining:'',
     coursehandling:''
  }

  message=[{
    username:'',
    email:'',
    date:'',
    subject:'',
    message:'', 
    expanded: false
  }];
  toggle(expanded: boolean) {
    expanded = !expanded;
  }

  ngOnInit(): void {

    this.messageService.getMessages().subscribe((data)=>{
    this.message=JSON.parse(JSON.stringify(data));

    
 

    console.log("display profilesssss");

    let facultyid = localStorage.getItem("userid");
    console.log(facultyid);
    this.facultyservice.getUser(facultyid).subscribe((data)=>{
      this.facultyinfo=JSON.parse(JSON.stringify(data));
      console.log(this.facultyinfo);
  })
  }

  editProfile(){
    console.log("submittteeeed",this.facultyinfo);
    alert(" update Success");
    this.facultyservice.editUser(this.facultyinfo);   
    console.log("update",this.facultyinfo);
   // this.router.navigate(['products']);
  }

  onChangeSelection(selected: string) {
    var chang = parseInt(selected);
    console.log(chang);
}


// onFileChange(event) {
//   const reader = new FileReader();
  
//   if(event.target.files && event.target.files.length) {
//     const [file] = event.target.files;
//     reader.readAsDataURL(file);
  
//     reader.onload = () => {
 
//       this.imageSrc = reader.result as string;
   
//       this.myForm.patchValue({
//         fileSource: reader.result
//       });
 
//     };
 
//   }
// }
}

