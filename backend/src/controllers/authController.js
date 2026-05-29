const User= require("../models/UserSchema")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")


exports.register= async (req, res)=>{
    try {
        const {name, email, password, role}= req.body
        const existingUser= await User.findOne({email})
        if (existingUser)
        {
            return res.status(400).json({
                message:"User already exists"
            })
        }

        const user= await User.create({
            name,
            email,
            password,
            role
        })

        res.status(201).json({
            message:"User created successfully !",
            user
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.login= async (req, res)=>{
    try {
        const {email, password}= req.body
        const user= await User.findOne({email})
        if (!user)
        {
            return res.status(400).json({
                message:"Invalid credentials"
            })
        }

        const isMatch= await bcrypt.compare(password, user.password)
        if (!isMatch)
        {
            return res.status(400).json({
                message:"Invalid credentials"
            })
        }

        const token= jwt.sign(
            {
                id:user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'7d'
            }
        )
        user.password= undefined
        res.status(201).json({
            message:"Login successfully !",
            token,
            user,
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}