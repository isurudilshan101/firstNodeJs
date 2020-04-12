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
    const num=req.params.num;

    return  res.json(toDos);
});

//get one todo by index
router.get("/todolist/:num",(req,res)=>{
    const num=req.params.num;

    return res.json(toDos[num-1]);

});

//get todo by id

router.get("/todo/:id",(req,res)=>{
    const id=req.params.id;
    const todo=toDos.filter(todo=>todo.id === id);
    return res.json(todo);

});
 
//Add todo to list
router.post("/addTodo",(req,res)=>{
    const body=req.body;
    body.id=uuid();
    toDos=[...toDos, body];
    return res.json(toDos);
});




module.exports =router;          