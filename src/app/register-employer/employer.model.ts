//CREATING THE SCHEMA
export class EmployerModel{
    constructor(
        public firstname : String,
       public lastname : String,
        public user_email : String,
        public password : String,
        public phone_number : Number,
        public company : String,
        public company_type : String,
        public job_title : String,
        public info : String,
        public website : String,
        
        
       
    ){}
}