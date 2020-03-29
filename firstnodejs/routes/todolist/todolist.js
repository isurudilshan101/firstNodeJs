const {Router}=require("express");
const {uuid}=require("uuidv4");

let toDos=[
             {
                id:uuid(),
                title: "Learn Nodejs",
                description: "Learn Nodejs with express"
             },

             {
                id:uuid(),
                title: "Learn react",
                description: "Learn react with express"
             }
          ];

const router=Router();
router.get("/todolist/:num",(req,res)=>{
    const num=req.params.num;

    return res.json(toDos[num-1]);

});

module.exports =router;        