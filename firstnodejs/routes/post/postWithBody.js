const {Router}=require("express");
const router=Router();

router.post("/api/bodyTest",(req,res)=>{
    console.log(req.body);
    const body=req.body;
    return res.json(body);
});

module.exports=router;
