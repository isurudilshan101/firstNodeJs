const {Router}=require("express");
const {uuid}=reqire("uuidv4");
let toDos=[
             {
                id:uuid(),
                title: "Learn Nodejs",
                description: "Learn Nodejs with express"
             }
          ];

const router=Router();

module.exports =router;        