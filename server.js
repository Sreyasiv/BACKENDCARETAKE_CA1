const express=require('express')

const app=express()
app.use(express.json())

app.post('/login',(req,res)=>{
    const{email,password}=req.body

    if(!password || password.length===0){
        return res.status(400).json({message:"Password cannot be empty"})
    }
    if(!email || email.length===0){
        return res.status(400).json({message:"Email cannot be empty"})
    }
    res.send("User logged in successfully")
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000")
})