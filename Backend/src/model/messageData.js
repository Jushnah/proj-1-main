const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
mongoose.connect('mongodb://localhost:27017/AlumniDb',
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
 );

const Schema = mongoose.Schema;//To Access the schema from Mongoose package

const MessageSchema = new Schema({
    username : String,
    email : String,
    date : String,
    subject : String,
    message : String,
    expanded:{type: Boolean,default: false,required: true}

});//structure saved to db
//Model Creation----->Each Model is instance of Document
var messagedata = mongoose.model('message',MessageSchema);

module.exports = messagedata;