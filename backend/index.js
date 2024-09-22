//Write basic express boilerplate code 
//write express.json() middlware
const cors=require('cors')
const express=require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app=express()
app.use(express.json())
app.use(cors())
//can also specify which domain can acess the backend using{origin:'Link'}

app.post('/todo',async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'You sent a wrong inputs'
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:'Todo Created'
    })
})
app.get('/todos',async function(req,res){
    const todos=await todo.find({})

    res.json({
        todos
    })
})

app.put('/completed',async function(req,res){
    const updatedPayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatedPayload);
    console.log(parsedPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'You sent a wrong inputs'
        })
        return;
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:'Todo marked as completed'
    })
})
app.listen(3000, function() {
    console.log('Running Server........');
});
