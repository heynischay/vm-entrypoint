const express = require("express");



const app = express()

app.use(express.json())



app.get("/",async(req,res) => {


return res.json({message:"hello world"})

	
})



app.get("/me",async(req,res) => {


return res.json({message:"welcome nischay"})

	
})


app.listen(3000,()=> {
	console.log("server running at port 3000")
})
