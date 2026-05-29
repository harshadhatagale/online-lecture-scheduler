const User = require("../models/UserSchema");

exports.getAllInstructors = async (
  req,
  res
) => {
  try {

    const instructors =
      await User.find({
        role: "instructor",
      }).select("-password");

    res.status(200).json(
      instructors
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};