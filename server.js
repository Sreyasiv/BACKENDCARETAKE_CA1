const express=require('express')

const app=express()
app.use(express.json())

app.post('/signup',(req,res)=>{
    const{username,email}=req.body

    if(!username || username.length===0){
        return res.status(400).json({message:"Username invalid"})
    }
    if(!email || email.length===0){
        return res.status(400).json({message:"Username invalid"})
    }
    res.send("User registered successfully")
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000")
})