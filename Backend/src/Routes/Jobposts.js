const express = require('express');
const JobRouter = express.Router();//Creating seperate router handler
const Jobdata = require('./../model/Jobpost');



//JOB POSTING

JobRouter.post('/jobposting', function (req,res) {
 
  
    var jobs = {
      jobtitle: req.body.job.jobtitle,
      company: req.body.job.company,
      requirements: req.body.job.requirements,
      joblocation: req.body.job.joblocation,
      exdate: req.body.job.exdate,
      qualification: req.body.job.qualification,
      type: req.body.job.type,
      nojobs: req.body.job.nojobs,
      email: req.body.job.email,
      description: req.body.job.description
      
    }
  
    var jobnew = new Jobdata(jobs);
    jobnew.save();
    
  });
  
  //GET JOB POSTS
  JobRouter.get('/viewjobs',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');
    Jobdata.find({ status : "Verified"})
    .then(function (jobs) {
        res.send(jobs);
    });
  });
      
  //GET LIST OF NOT VERIFIED JOB POSTS
  JobRouter.get('/jobverify',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');
    Jobdata.find({"status":"Not Verified"})
    .then(function (jobs) {
        res.send(jobs);
    });
  });

  //Verification
  //UPDATE  USER
  JobRouter.put('/update',(req,res)=>{

    console.log(req.body._id)
    id=req.body._id,
    
    job_status = "Verified"
      Jobdata.findByIdAndUpdate({"_id":id},
                                {$set:{"status":job_status                              
                                }})
   .then(function(){
       res.send();
   })
})


   //SINGLE USER ID
   JobRouter.get('/:id',  (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
      Jobdata.findOne({"_id":id})
      .then((job)=>{
          res.send(job);
          console.log(job);
      });
  })
  module.exports = JobRouter;