const Lecture = require("../models/LectureSchema")
const Batch = require("../models/BatchSchema")
const User = require("../models/UserSchema")


// CREATE LECTURE
exports.createLecture = async (req, res) => {

    try {

        const {
            batch,
            instructor,
            lectureDate
        } = req.body


        // CHECK BATCH EXISTS
        const existingBatch = await Batch.findById(batch)

        if(!existingBatch){
            return res.status(404).json({
                message: "Batch not found"
            })
        }


        // CHECK INSTRUCTOR EXISTS
        const existingInstructor = await User.findById(instructor)

        if(!existingInstructor){
            return res.status(404).json({
                message: "Instructor not found"
            })
        }


        // DATE RANGE
        const start = new Date(lectureDate)
        start.setHours(0,0,0,0)

        const end = new Date(lectureDate)
        end.setHours(23,59,59,999)


        // CHECK CLASH
        const alreadyAssigned = await Lecture.findOne({
            instructor,
            lectureDate: {
                $gte: start,
                $lte: end
            }
        })

        if(alreadyAssigned){
            return res.status(400).json({
                message: "Instructor already assigned on this date"
            })
        }


        // CREATE LECTURE
        const lecture = await Lecture.create({
            batch,
            instructor,
            lectureDate
        })


        res.status(201).json({
            message: "Lecture scheduled successfully",
            lecture
        })

    } catch(error){

        res.status(500).json({
            message: error.message
        })

    }

}

exports.getAllLectures = async (req, res) => {

    try {

        const lectures = await Lecture.find()
        .populate({
            path: "batch",
            populate: {
                path: "course"
            }
        })
        .populate("instructor", "-password")

        res.status(200).json(lectures)

    } catch(error){

        res.status(500).json({
            message: error.message
        })

    }

}

exports.getInstructorLectures = async (req, res) => {

    try {

        const instructorId = req.params.instructorId

        const lectures = await Lecture.find({
            instructor: instructorId
        })
        .populate({
            path: "batch",
            populate: {
                path: "course"
            }
        })
        .populate("instructor", "-password")


        res.status(200).json(lectures)

    } catch(error){

        res.status(500).json({
            message: error.message
        })

    }

}