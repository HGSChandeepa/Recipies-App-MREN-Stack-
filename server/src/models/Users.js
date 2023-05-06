import mongoose from "mongoose";

//this is the user model inside our database

const UserSchema = new mongoose.Schema({
  //here we can create the documents that our user should have
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//export the mongoose model for the user schema
export const UserModel = mongoose.model("users", UserSchema); //here we can give the name for our model in the database
