const mongoose= require("mongoose")
const BatchSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})

module.exports= mongoose.model("Batch", BatchSchema)