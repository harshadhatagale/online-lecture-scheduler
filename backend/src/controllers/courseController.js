const Course = require("../models/CourseSchema")
exports.createCourse = async (req, res) => {
    try {
        const {
            name,
            level,
            description,
            image
        } = req.body

        const course = await Course.create({
            name,
            level,
            description,
            image
        })

        res.status(201).json({
            message: "Course created successfully!",
            course
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getCourses= async(req, res)=>{
    try {
        const courses= await Course.find()

        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
exports.getCourseById= async(req, res)=>{
    try {
        
        const course= await Course.findById(req.params.id)
        if (!course)
        {
            return res.status(400).json({
                message:"Course not found!"
            })
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}