const express = require('express');
const EmpRouter = express.Router();//Creating seperate router handler
const Employerdata = require('./../model/Employer');


//REGISTRATION 
EmpRouter.post('/newuser', function (req,res) {
   
  
    var user = {
        firstname : req.body.user.firstName,
        lastname : req.body.user.lastName,
         user_email : req.body.user.email,
         phone_number: req.body.user.phone,
         password : req.body.user.password,
         company : req.body.user.company,
         companytype : req.body.user.companytype,
         jobtitle: req.body.user.jobtitle,
         info : req.body.user.info,
         website : req.body.user.website,
        //image:new_img
    }
  
    var usernew = new Employerdata(user);
    usernew.save();
    
  });
  
  EmpRouter.get('/users',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');
    Employerdata.find()
    .then(function (users) {
        res.send(users);
    });
  });
  //SINGLE USER ID
  EmpRouter.get('/users/:id',  (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
      Employerdata.findOne({"_id":id})
      .then((user)=>{
          res.send(user);
          console.log(user);
      });
  })

//PENDING VERIFY USERS LIST
EmpRouter.get('/verify',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');
  Employerdata.find({"status":"Unapproved"})
  .then(function (users) {
      res.send(users);
  });
});


  //UPDATE  USER
EmpRouter.put('/update', (req, res) => {
  console.log(req.body)
  id = req.body._id,
    username = req.body.username,
    user_email = req.body.user_email,
    phone_number = req.body.phone_number,
    user_status = "Approved"
  Employerdata.findByIdAndUpdate({ "_id": id },
    {
      $set: {
        "username": username,
        "user_email": user_email,
        "phone_number": phone_number,
        "status": user_status

      }
    })
    .then(function () {
      res.send();
    })
 


})

  
 
EmpRouter.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    Employerdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });



module.exports = EmpRouter;