const mongoose=require('mongoose');
const StudentSchema=require('../Schema/StudentSchema');

var StudentModel=new mongoose.model("student",StudentSchema);

module.exports=StudentModel;