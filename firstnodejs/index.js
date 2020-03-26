const express=require("express");

const app=express();

app.get("/se",(req,res)=>{
    return res.json("Hello world");
});

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server strted at ${PORT}`);
});