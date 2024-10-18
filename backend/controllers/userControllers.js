import mongoose from "mongoose";
import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(user.password, password);
      if (!isMatch) {
        res.json({ message: "Invalid Password" });
      } else {
        res.json({
          message: "Success",
          userRole: user.userRole,
        });
      }
    } else {
      res.json({ message: "User Not Found" });
    }
  } catch (error) {
    res.json(error);
  }
};

const signup = async (req, res) => {
  const { Username, email, password, role } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json({ message: "User Already Exists" });
    } else {
      // const hasedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        Username:Username,
        email:email,
        password:password,
        userRole: role,
      });
      if (newUser)
        res.status(201).json({ message: "User created successfully" }); 
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

export default { signin, signup };
