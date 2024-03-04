const {Schema,model}=require("mongoose")

const studentSchema=new Schema({
    name:String,
    grade:Number,
    place:String
},{
    timestamps:true
})
module.exports=model("student",studentSchema)