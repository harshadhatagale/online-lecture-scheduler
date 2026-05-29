
const express = require("express")
const { protect } = require("../middleware/authMiddleware")
const router = express.Router()

const {
    createLecture,
    getAllLectures,
    getMyLectures,
    getInstructorLectures
} = require("../controllers/lectureController")


router.post("/", createLecture)

router.get("/", getAllLectures)
router.get(
    "/my-lectures",
    protect,
    getMyLectures
)
router.get("/instructor/:instructorId", getInstructorLectures)
router.get(
    "/my-lectures",
    protect,
    getMyLectures
)

module.exports = router