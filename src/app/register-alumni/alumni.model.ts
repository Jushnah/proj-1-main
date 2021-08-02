//CREATING THE SCHEMA
export class AlumniModel{
    constructor(
       public firstname : String,
       public lastname : String,
        public user_email : String,
        public password : String,
        public phone_number : Number,
        public gender : String,
        public dob : String,
        public city : String,
        public course : String,
        public date : String,
        
       
    ){}
}