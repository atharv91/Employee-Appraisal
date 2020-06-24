const mongoose = require('mongoose')

var Employee = mongoose.model('Employee',{
	name : {type:String},
	position : {type:String},
	office : {type:String},
	ratingOne : {type:Number},
	ratingTwo : {type:Number},
	ratingThree : {type:Number},
	overallRating : {type:Number}
});


module.exports = {
	Employee 
};