const express = require("express")

const router = express.Router()

const {
    createLecture,
    getAllLectures,
    getInstructorLectures
} = require("../controllers/lectureController")


router.post("/", createLecture)

router.get("/", getAllLectures)

router.get("/instructor/:instructorId", getInstructorLectures)


module.exports = router