const express = require("express")

const router = express.Router()

const {
    createBatch,
    getBatchesByCourse,
    getAllBatches
} = require("../controllers/batchController")


router.post("/", createBatch)

router.get("/", getAllBatches)

router.get("/course/:courseId", getBatchesByCourse)


module.exports = router