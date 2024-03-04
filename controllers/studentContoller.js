const Student = require("../models/Student")

const getStudents=async(req,res)=>{
    try {
      const students=await Student.find().lean()
      res.status(200).json(
        students
      )
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"unable to get students"
        })
    }
}

const getStudent=async(req,res)=>{
    // const {name}=req.body
    let id=req.params.id
    try {
      const student=await Student.findById(id)
      res.status(200).json(
        student
      )
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"unable to get student"
        })
    }
}

const postStudent=async(req,res)=>{
    const {name,grade,place}=req.body
    try {
      const student=await Student.create({
        name:name,
        grade:grade,
        place:place
      })
      res.status(201).json(
        student
      )
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"unable to post student"
        })
    }
}

const updateStudent=async(req,res)=>{
    let id=req.params.id
    const {name,grade,place}=req.body
    try {
      const student=await Student.findOneAndUpdate({_id:id},{$set:{name:name,grade:grade,place:place}})
      res.status(200).json(
        student
      )
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"unable to update student"
        })
    }
}

const deleteStudent=async(req,res)=>{
    // const {name}=req.body
    let id=req.params.id
    try {
      const student=await Student.findOneAndDelete({_id:id})
      res.status(200).json(
        student
      )
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"unable to delete student"
        })
    }
}
module.exports={
    getStudent,getStudents,postStudent,updateStudent,deleteStudent
}