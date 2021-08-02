const express = require('express');
// const ProductData = require('./src/model/Productdata');
const cors = require('cors');
const Userdata = require('./src/model/Config');
const Alumnidata = require('./src/model/Alumni');
const Employerdata = require('./src/model/Employer');
const Jobdata = require('./src/model/Jobpost');
const messagedata = require('./src/model/messageData')

var bodyparser = require('body-parser');
var nodemailer = require('nodemailer');
var app = new express();
app.use(cors());
app.use(bodyparser.json());

//jwt npm install jsonwebtoken
const jwt = require('jsonwebtoken');




//MIDDLEWARE FUNCTION TO VERIFY TOKEN
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1] //Authorization:`Bearer ${authservice.getToken()}` [0]->> BEARER ,[1]-->> TOKEN
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey') //Regenerating payload with token n secret key

    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject   //verified
    console.log("firstiddddddddeee",req.userId);

    next()
  }

  const AlumniRouter = require('./src/Routes/Alumni');
  const EmpRouter = require('./src/Routes/Employer');
  const JobRouter = require('./src/Routes/Jobposts');

  app.use('/alumni',AlumniRouter);

  app.use('/employer',EmpRouter);
  app.use('/jobs',JobRouter);

 //login
app.post('/login', async(req, res) => {
  
  let userData = req.body
 
  const username1 = userData.uname;
  const password1 = userData.password;
  
     
 
     const userVal = await (Userdata).findOne({user_email : username1 });
     const userVal3 = await (Employerdata).findOne({user_email : username1 });
     const userVal2 = await (Alumnidata).findOne({user_email : username1 });
     
    if(userVal){
      if (!userVal) {
        res.status(401).send('Invalid Username')
      } 
               
       else if (!(userVal.password === password1)) {
        res.status(401).send('Invalid Password')
      }
      else if(userVal.status == "Unapproved"){
        res.status(404).send('Not Allowed')

      }
       else {
           //jwt token passing on successful login
        // let payload = {subject: username1+password1}
      
        userType = userVal.Role;
       // userId=userVal.userid;
      
      // console.log("secondidee",userid);
       
        // let payload = {subject: userVal.username+userVal.password}
        let payload ={userType:userType,username:userVal.username}
        
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
        
        
      }

    }
    else if(userVal2){
      if (!userVal2) {
        res.status(401).send('Invalid Username')
      } 
               
       else if (!(userVal2.password === password1)) {
        res.status(401).send('Invalid Password')
      }
      else if(userVal2.status == "Unapproved"){
        res.status(404).send('Not Allowed')

      }
       else {
           //jwt token passing on successful login
        // let payload = {subject: username1+password1}
       
        userType = userVal2.Role;
       
        // let payload = {subject: userVal.username+userVal.password}
        let payload ={userType:userType,username:userVal2.username}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
        
      }
    }
    else if(userVal3){
      if (!userVal3) {
        res.status(401).send('Invalid Username')
      } 
               
       else if (!(userVal3.password === password1)) {
        res.status(401).send('Invalid Password')
      }
      else if(userVal3.status == "Unapproved"){
        res.status(404).send('Not Allowed')

      }
       else {
           //jwt token passing on successful login
        // let payload = {subject: username1+password1}
       
        userType = userVal3.Role;
        
       
        // let payload = {subject: userVal.username+userVal.password}
        let payload ={userType:userType,username:userVal3.username}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
        
      }
    }
    else{
      res.status(401).send('Invalid Username/Password')
    }


        
    
})


//REGISTRATION Faculty
app.post('/newuser', function (req,res) {
 
  
  var user = {
     firstname : req.body.user.firstname,
     lastname:req.body.user.lastname,
      user_email : req.body.user.email,
       phone_number: req.body.user.phone,
       password : req.body.user.password,
       

      //image:new_img
  }

  var usernew = new Userdata(user);
  usernew.save();
  
});

//PENDING VERIFY USERS LIST
app.get('/verify',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');
  Userdata.find({"status":"Unapproved"})
  .then(function (users) {
      res.send(users);
  });
});


app.get('/users',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');
  Userdata.find()
  .then(function (users) {
      res.send(users);
  });
});
//SINGLE USER ID
app.get('/:id',  (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
    Userdata.findOne({"_id":id})
    .then((user)=>{
        res.send(user);
        console.log(user);
    });
})
//UPDATE  USER
app.put('/update', (req, res) => {
  
  console.log(req.body);
  console.log(req.body._id);

  id=req.body.userid,
  userid = req.body.userid,
    username = req.body.firstname,
    user_email = req.body.user_email,
    lastname=req.body.lastname,
    phone_number = req.body.phone_number,
    skills=req.body.skills,
    dateofjoining=req.body.dateofjoining,
    coursehandling=req.body.coursehandling,
    user_status = "Approved"

  Userdata.findByIdAndUpdate({ "_id":id },
    {
      $set: {
        "userid":userid,
        "username": username,
        "lastname":lastname,
        "user_email": user_email,
        "phone_number": phone_number,
        "status": user_status,
        "skills":skills,
        "dateofjoining":dateofjoining,
        "coursehandling":coursehandling,

      }
    })
    .then(function () {
      res.send();
    })



})



 
app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    Userdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

app.get('/messages',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    messagedata.find()
                .then(function(message){
                    res.json(message);
                });
});


app.listen(3000,function () {
    console.log('Listening to PORT 3000');
    
});
