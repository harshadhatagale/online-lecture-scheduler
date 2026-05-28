const mongoose = require("mongoose")
const LectureSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    batch:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Batch",
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    lectureDate: {
        type: Date,
        required: true,
    },
})

module.exports = mongoose.model("Lecture", LectureSchema)