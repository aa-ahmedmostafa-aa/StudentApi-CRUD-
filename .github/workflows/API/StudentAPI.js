const mongoose=require('mongoose');
const StudentModel=require('../Models/StudentModule');

function StudentAPI(app)
{
    app.post('/Student/insert', async (req,res)=>{
        try {
            const {_id,name,phone,age,address}=req.body;
            var newStudent= new StudentModel({
                _id:mongoose.Types.ObjectId(),
                name,phone,age,address
            });
            await newStudent.save();
            res.json({message:"Student Add Succsed",resultCode:"0"});
        } 
        catch (error) {
            res.json({Msg:error});
        }

    });
    //Get All User ..............

    app.get('/Student/getAll',async (req,res)=>{
       try {
        var allStudent=await StudentModel.find({});
        res.json({message:"Succsed",AllData:allStudent});
       } catch (error) {
           res.json({message:error});
       }

    });

    //Delete Student................

     app.delete('/Student/delete/:id',async (req,res)=>{
        try {
            var id = req.params.id;
              await  StudentModel.deleteOne({_id:id});
         res.json({message:"Row Deleted"});
        }
         catch (error) {
            res.json({message:error});
        }
 
     });

     //Get User With Specific ID...........

     app.get('/Student/:id',  async(req, res)=> {
         try {
            var id = req.params.id;
            var obj = await StudentModel.find({_id:id});
            res.json({message:"succsed",student:obj});
         } catch (error) {
             res.json({message:error})
         }

    });
    //Update Student
    app.put('/Student/Update/:id',  async(req, res)=> {
        try {
            var id = req.params.id;
            const {name,phone,age,address}=req.body;
        //var res= await  StudentModel.updateOne({_id:id}, {name,phone,age,address},{new:true});
        var result= await StudentModel.findOneAndUpdate({_id:id}, {name,phone,age,address}); 
        res.json({message:"succsed",student:result});
        }
         catch (error) {
            res.json({message:error})
        }

   });

}
module.exports=StudentAPI;