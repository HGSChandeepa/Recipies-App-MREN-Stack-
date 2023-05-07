import React, { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

function CreteRecipes() {
  //user id (by the custom hook)
  const userId = useGetUserId();

  //navigation
  const navigate = useNavigate();
  //state for the recipes
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userId,
  });

  //handleChange function that handles the input in the input feilds
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value }); //here  [name]: value is use to replace the property with the name to the value provided
  };

  //addIngredient function , this function will create a new input feild
  //for enter a new type of a ingredient
  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  ///handleIngredientChange function , this is usedd to handle the changes in the input and update the ingredients array
  const handleIngredientChange = (event, index) => {
    //data in the form
    const { value } = event.target;
    //current ingredients copy
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients: ingredients });
  };

  //ccreate the form submit
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", recipe);
      alert("Recipe added");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h2 className=" text-4xl font-extrabold">Create a new Recipe</h2>
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-center flex-col p-3 mt-3 gap-5"
      >
        {/* name */}
        <div className=" flex  items-center justify-center gap-4">
          <label htmlFor="name">Name</label>
          <input
            required
            className="bg-gray-100 border border-gray-300 rounded-md p-1"
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        {/* Ingredients */}
        <div className=" flex flex-col items-center justify-center gap-4">
          <label htmlFor="ingredients">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <input
                required
                className="bg-gray-100 border border-gray-300 rounded-md p-1"
                key={index}
                type="text"
                name="ingredients"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
              />
            );
          })}
          <button
            type="button"
            className=" bg-green-500 p-2"
            onClick={addIngredient}
          >
            Add Ingredient
          </button>
        </div>
        {/* Instructios */}
        <div className=" flex  flex-col items-center justify-center gap-4">
          <label htmlFor="instructions">Instructios</label>
          <textarea
            required
            onChange={handleChange}
            name="instructions"
            id="insturctions"
            cols="30"
            rows="10"
            className="bg-gray-100 border border-gray-300 rounded-md p-1"
          ></textarea>
        </div>
        {/* Image Url */}
        <div className=" flex items-center justify-center gap-4">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            required
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded-md p-1"
            type="text"
            id="image"
            name="imageUrl"
          />
        </div>
        {/* cooking time */}
        <div className=" flex items-center justify-center gap-4">
          <label htmlFor="CookingTime">Cooking Time</label>
          <input
            required
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded-md p-1"
            type="number"
            id="cookingTime"
            name="cookingTime"
          />
        </div>
        <button type="submit" className=" bg-green-500 p-3">
          Create recipe
        </button>
      </form>
    </div>
  );
}

export default CreteRecipes;
