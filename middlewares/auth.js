const jwt = require("jsonwebtoken");
const { message } = require("statuses");
require("dotenv").config();

exports.auth = (req,res,next) =>{
    try{
        const token = req.body.token ;

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token missing.",
            })
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;
        }
        catch(err){
            return res.status(401).json({
                success: false,
                message: "Token is inavalid",
            })
        }
        next();
    }
    catch(err){
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying the token",
        })
    }
}

exports.isStudent = (req,res,next) =>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Students.",
            })
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: "User role is not matching.",
        })
    }
}

exports.isAdmin = (req,res,next) =>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin.",
            })
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: "User role is not matching.",
        })
    }
}
