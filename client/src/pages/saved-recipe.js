import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userId = useGetUserId();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/saved-recipes/${userId}`
        );
        console.log(response);
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.length > 0 &&
          savedRecipes.map((recipe) => {
            return (
              <li
                key={recipe._id}
                className="flex flex-col items-center justify-center m-4 mx-auto w-2/3 border-4 border-green-600 p-2 rounded-md"
              >
                <div>
                  <h2 className="p-3 font-medium text-lg">{recipe.name}</h2>
                </div>
                <div>
                  <p className="font-light p-2">{recipe.instructions}</p>
                </div>
                <div>
                  <h2>Ingredients List</h2>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => {
                      return (
                        <li key={index} className="font-light">
                          {ingredient}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <img className="w-60" src={recipe.imageUrl} alt={recipe.name} />
                <p className="p-2">{recipe.cookingTime} (minutes)</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default SavedRecipes;
