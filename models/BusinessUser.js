const{Schema,model}=require("mongoose"),{businessUserCollection}=require("../db/dbVars"),businessUserSchema=new Schema({nickName:{type:String,required:!0,unique:!0},email:{type:String,required:!0,unique:!0},dni:{type:String,required:!0,unique:!0},password:String,business:{type:String,required:!0},role:{type:String,required:!0,default:"employee"},date:{type:Date,default:new Date,required:!0}},{collection:businessUserCollection});module.exports=model("BusinessUser",businessUserSchema);