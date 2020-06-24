const express = require('express');
var router = express.Router();
var {Employee} = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;

//localhost:3000/employees/
router.get('/',(req,res)=>{
	Employee.find((err,docs)=>{
		if(!err)
		{
			res.send(docs);
		}
		else
		{
			console.log('Error');
		}
	});
});

router.get('/:id',(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
	{
		return res.status(400).send('No record with given id');
	}
	Employee.findById(req.params.id,(err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
	});
});



router.post('/',(req,res)=>{
	var emp = new Employee(
	{
		name : req.body.name,
		position : req.body.position,
		office : req.body.office,
		ratingOne : req.body.ratingOne,
		ratingTwo : req.body.ratingTwo,
		ratingThree : req.body.ratingThree,
		overallRating : req.body.overallRating
	});
	emp.save((err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
		else
		{
			console.log("Error");
		}
	});
});

router.put('/:id',(req,res)=>
{
	if(!ObjectId.isValid(req.params.id))
	{
		return res.status(400).send('No record with given id');
	}
	var emp = 
	{
		name : req.body.name,
		position : req.body.position,
		office : req.body.office,
		ratingOne : req.body.ratingOne,
		ratingTwo : req.body.ratingTwo,
		ratingThree : req.body.ratingThree,
		overallRating : req.body.overallRating
	};

	Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
	});
});

router.delete('/:id',(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
	{
		return res.status(400).send('No record with given id');
	}
	Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
	});
})


module.exports = router;