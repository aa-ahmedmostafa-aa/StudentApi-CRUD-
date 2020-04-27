const mongoose=require('mongoose');

var StudentSchema= new mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
name:{type:String,required:true},
phone:{type:String},
address:{type:String}
});
module.exports=StudentSchema;