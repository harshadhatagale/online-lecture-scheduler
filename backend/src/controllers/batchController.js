const Batch = require("../models/BatchSchema")
const Course = require("../models/CourseSchema")
exports.createBatch = async (req, res) => {
    try {
        const {
            name,
            course
        } = req.body

        const existingCourse = await Course.findById(course)
        if(!existingCourse){
            return res.status(404).json({
                message: "Course not found"
            })
        }

         const batch = await Batch.create({
            batchName,
            course
        })

        res.status(201).json({
            message: "Batch created successfully",
            batch
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getBatchesByCourse = async (req, res) => {

    try {

        const batches = await Batch.find({
            course: req.params.courseId
        }).populate("course")

        res.status(200).json(batches)

    } catch(error){

        res.status(500).json({
            message: error.message
        })

    }

}

exports.getAllBatches = async (req, res) => {

    try {

        const batches = await Batch.find()
        .populate("course")

        res.status(200).json(batches)

    } catch(error){

        res.status(500).json({
            message: error.message
        })

    }

}