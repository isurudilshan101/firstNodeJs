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
router.get("/todolist",(req,res)=>{
    return res.json(toDos);
});

module.exports =router;        