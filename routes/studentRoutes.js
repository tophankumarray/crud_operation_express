const { getStudents, postStudent, getStudent, updateStudent, deleteStudent } = require("../controllers/studentContoller")

const studentRouter=require("express").Router()

studentRouter.get("/student",getStudents)
studentRouter.post("/student",postStudent)
studentRouter.get("/student/:id",getStudent)
studentRouter.put("/student/:id",updateStudent)
studentRouter.delete("/student/:id",deleteStudent)

module.exports=studentRouter


// http://localhost:5000/app/student
