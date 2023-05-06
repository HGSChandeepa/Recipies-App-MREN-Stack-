import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

//Register user

router.post("/register", async (req, res) => {
  //the data send in the req
  const { username, password } = req.body;
  //check the user is in the database
  const user = await UserModel.findOne({ username: username });

  //if the user is already exist
  if (user) {
    return res.json({ message: "user already exists" });
  }

  //hash the password
  const hashedPasword = await bcrypt.hash(password, 10);

  //add the user to the databases

  const newUser = new UserModel({
    username: username,
    password: hashedPasword,
  });
  await newUser.save();
  res.json({ message: "user added successfuly" });
});

//Login user
router.post("/login", async (req, res) => {
  //username and password from the req
  const { username, password } = req.body;
  //checck the user is in the database
  const user = await UserModel.findOne({ username: username });

  //now we can login is the user is in the database only if not we have to register
  //so if we not find the user
  if (!user) {
    return res.json({ message: "user not Exists try to register!" });
  }
  //if the user exists we have to check the password is also the same
  const isPasswordValid = await bcrypt.compare(password, user.password);
  //if the password is not valid
  if (!isPasswordValid) {
    return res.json({ message: "username or password is not correct!" });
  }
  //if the password is correct
  //first we have to create a json web tocken
  const token = jwt.sign({ id: user._id }, "secret"); //TODO:change this to .env
  res.json({ token, userId: user._id });
});

export { router as UserRouter };
