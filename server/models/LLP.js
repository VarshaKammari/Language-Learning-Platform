const mongoose=require("mongoose");

const ClientSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    score:{type:Number,required:true}
    },
    {
        collection:'project-data'
    }
);

const User=mongoose.model("llp",ClientSchema);
module.exports=User;