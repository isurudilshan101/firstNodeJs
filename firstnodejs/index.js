const express=require("express");

const app=express();

//get
app.get("/se",(req,res)=>{
    return res.json("get request");
});

//get with parameters
app.get("/se/:seNO",(req,res)=>{
  //const seNumber=req.params.seNO;
 // return res.json(seNumber);
  return res.json(req.params.seNO);

});

// app.put("/se",(req,res)=>{
//     return res.json("put request");
// });

// app.post("/se",(req,res)=>{
//     return res.json("post request");
// });

// app.delete("/se",(req,res)=>{
//     return res.json("delete request");
// });

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server strted at ${PORT}`);
});