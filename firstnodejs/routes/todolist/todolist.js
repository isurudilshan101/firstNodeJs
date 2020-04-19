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
             },

             {
                id:uuid(),
                title: "Learn viue",
                description: "Learn react with viuex"
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

//delete todo from list 

router.delete("/deletetodo/:id",(req,res)=>{
    const id=req.params.id;
   
    const isHere=toDos.some(todo=>todo.id===id)
    if(!isHere){
        return res.json("todo no found");
    }
   const newtoDos=toDos.filter(todo=>todo.id!==id);
   toDos=newtoDos;
   return res.json(toDos);    
});

//edit todo from list 

router.put("/editTodo/:id",(req,res)=>{
    // const id=req.params.id;
    // const body=req.body;
    // const isHere=toDos.some(todo=>todo.id===id);
    // if(!isHere){
    //     return res.json("todo not found");
    // } 
    // const newToDos=toDos.filter(todo=>todo.id!==id);
    // toDos=newToDos;
    
    // let newTodo={id, ...body};
    // toDos=[newTodo, ...toDos];
    
    //  return res.json(toDos);

    const id=req.params.id;
    const {title,description}=req.body;

    const index=toDos.findIndex(todo=>todo.id===id);
    //console.log(index);
    if(index<0){
        return res.json("todo not found");
    }
    toDos[index].title=title;
    toDos[index].description=description;
    return res.json(toDos);
    


});


module.exports =router;          