//CREATING THE SCHEMA
export class UserModel{
    constructor(
       public userid: String,
       public  firstname : String,
       public  lastname : String,

        public user_email : String,
        public password : String,
        public phone_number : Number,
        public skills : String,
        public dateofjoining : String,
        public  coursehandling : String
       
        //role : {type: Number,default: 0,required: true} 
       
        // public file :File
        
       
    ){}
}