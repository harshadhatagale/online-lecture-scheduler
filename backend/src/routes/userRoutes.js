const express = require("express");

const router = express.Router();

const {
  getAllInstructors,
} = require("../controllers/userController");

router.get(
  "/instructors",
  getAllInstructors
);

module.exports = router;