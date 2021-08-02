const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
mongoose.connect('mongodb://localhost:27017/AlumniDb', {useNewUrlParser: true}, { useUnifiedTopology: true });

const Schema = mongoose.Schema;//To Access the schema from Mongoose package

const JobpostingSchema = new Schema({
    jobtitle : String,
    company:String,
    requirements:String,
    joblocation:String,
    exdate:String,
    qualification:String,
    type:String,
    nojobs:Number,
    email:String,
    description:String,
    status:{type: String,default: "Not Verified",required: true},
});

var Jobdata = mongoose.model('jobdata',JobpostingSchema);

module.exports = Jobdata;