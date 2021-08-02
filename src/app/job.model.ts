//CREATING THE SCHEMA
export class JobpostModel{
    constructor(
       public jobtitle  : String,
       public company : String,
        public requirements : String,
        public joblocation : String,
        public exdate : String,
        public qualification : String,
        public type : String,
        public nojobs : Number,
        public email : String,
        public description : String,
       
    ){}
}