const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["admin", "instructor"],
        default: "instructor"
    }

}, {
    timestamps: true
})


UserSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        return 
    }

    this.password = await bcrypt.hash(this.password, 10)

})

module.exports = mongoose.model("User", UserSchema)