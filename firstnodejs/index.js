const express=require("express");

//create routes
const postRequest=require("./routes/post/postWithParams");


const app=express();

app.use(postRequest);

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

//put

 app.put("/se",(req,res)=>{
     return res.json("put request");
 });

// put with params

app.put("/se/:seNO",(req,res)=>{
const seNumber=req.params.seNO;
return res.json(seNumber);

});


//post

 app.post("/se",(req,res)=>{
     return res.json("post request");
 });

//post with params

// app.post("/se/:seNO",(req,res)=>{
//     const seNumber=req.params.seNO;
//     return res.json(seNumber);
// });

//delete
 app.delete("/se",(req,res)=>{
    return res.json("delete request");
 });

//delete with params

app.delete("/se/:seNO",(req,res)=>{
        const seNumber=req.params.seNO;
        return res.json(seNumber);
});

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server strted at ${PORT}`);
});