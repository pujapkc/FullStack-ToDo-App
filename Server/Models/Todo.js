const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default: false
    }
})

//var id=new mongoose.mongo.ObjectId()
//console.log(id)

const TodoModel=mongoose.model("todos",TodoSchema)
module.exports=TodoModel




