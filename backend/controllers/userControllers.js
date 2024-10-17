import mongoose from "mongoose";
import { User } from "../models/user.models";
import bcrypt from "bcrypt";

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const isMatch=await bcrypt.compare(user.password,password)
    if(!isMatch){
        res.json({ message: "Invalid Password" });
  
    }else{
        res.json({
            message:"Success",
            userRole:user.userRole,
        })
    }
    
  } else {
    res.json({ message: "User Not Found" });
  }
};

const signup = async (req, res) => {
  const { Username, email, password, role } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.json({ message: "User Already Exists" });
  } else {
    const hasedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      Username,
      email,
      password: hasedPassword,
      userRole: role,
    });
    if(newUser) res.json({message:"User created successfully"})
  }
};

module.exports = { signin, signup };
