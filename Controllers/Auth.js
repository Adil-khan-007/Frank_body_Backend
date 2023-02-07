const jwt = require("jsonwebtoken");
const { UserModel } = require("../configs/Model");
require("dotenv").config();

const generateToken = (user)=>{
    const {email,fname,lname} = user;
    return jwt.sign({email,fname,lname},process.env.SECRET_KEY);
}

const register = async (req,res)=>{
    try{
        const {email,password,fname,lname} = req.body;

    if(!email || !password || !fname){
       return res.status(500).send({message : "name, email and password are mandatory"})
    }

    const exist = await UserModel.findOne({email});

    if(exist){
       return res.status(404).send({message : "User with this email already exist"})
    }

    const user = await UserModel.create({fname,lname,email,password});

      res.send({message : "Registration Succesfully"})
    }
    catch(err){
       return res.status(500).send({message : "Something went wrong"} )
    }
}


const login = async (req,res)=>{
    try{
        const {email,password} = req.body;

    if(!email || !password){
       return res.status(500).send({message : "Email and password are mandotory"})
    }

    const user = await UserModel.findOne({email});

    if(!user){
       return res.status(401).send({message : "User not exist with this credentials"})
    }
     
    const token = generateToken(user);
    const {fname,lname} = user

    return res.send({
        token : token,
        data : {fname,lname,email}
    })

    }
    catch(err){
       return res.status(500).send({message : "Something went wrong"} )
    }
}

module.exports = {
    register,
    login
}