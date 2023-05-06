import express from "express";
import cors from "cors"; //for create the resource sharing between the server and client
import mongoose from "mongoose";

//routers are imported here
import { UserRouter } from "./routes/users.js";

const app = express();

//middle wares
app.use(express.json()); //this will convert the data from the front end to json format
app.use(cors()); // for  the api requessts

//routes
app.use("/auth", UserRouter);

//data base connection
mongoose.connect(
  "mongodb+srv://saminchandeepa:test1234@recipies.5l04nhf.mongodb.net/recipies?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("Serever started");
});
