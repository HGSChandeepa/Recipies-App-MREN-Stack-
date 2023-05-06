import mongoose from "mongoose";

//create the schema for the recipie
//name / ingredients / instructions / imageUrl / cookingtime / //?user
const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  imageUrl: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  //user
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

//export the created schema (recipes )
export const RecipeModel = mongoose.model("recipes", RecipeSchema);
