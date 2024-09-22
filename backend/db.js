const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://journeyxbimal:papa9814479922@cluster0.vbila.mongodb.net/Todos')

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports={
    todo
}