const express=require("express")

const app=express()

app.use("/od",function(req,res,next){
    res.status(200).json({
        status:"success",
        message:"req on the url /od"
    })
})

module.exports=app