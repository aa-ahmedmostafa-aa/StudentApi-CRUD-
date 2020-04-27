var express = require("express");
var mongoose = require("mongoose");
const Config=require('./configration/ConfigFile');
const app=express();
const StudentAPI=require('./API/StudentAPI');
app.use(express.json());
mongoose.connect(Config.DB_CONNECTION_STRING);
//MongoClient.connect(Config.DB_CONNECTION_STRING, {useNewUrlParser: true } )

StudentAPI(app);

app.get('/',(req,res)=>{
 res.json({message:"Server is Running"});
});
app.listen(Config.APP_PORT);