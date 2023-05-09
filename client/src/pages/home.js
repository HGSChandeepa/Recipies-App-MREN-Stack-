import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";

function Home() {
  const [allRecipesList, setAllRecipesList] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [disabledbutton, setDisabledbutton] = useState(false);

  const userId = useGetUserId();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes/");
        setAllRecipesList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/saved-recipes/ids/${userId}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeId) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeId,
        userId,
      });

      setDisabledbutton(true);
      setSavedRecipes([...savedRecipes, recipeId]);
    } catch (err) {
      console.error(err);
    }
  };

  const isRecipeSaved = (id) => {
    return savedRecipes.includes(id);
  };

  return (
    <div>
      <h1>All Recipes</h1>
      <ul>
        {allRecipesList.length > 0 &&
          allRecipesList.map((recipe) => {
            return (
              <li
                key={recipe._id}
                className="flex flex-col items-center justify-center m-4 mx-auto w-2/3 border-4 border-green-600 p-2 rounded-md"
              >
                <div>
                  <h2 className="p-3 font-medium text-lg">{recipe.name}</h2>
                  <button
                    className={
                      disabledbutton ? "bg-green-300 p-2" : "bg-yellow-300 p-2"
                    }
                    onClick={() => saveRecipe(recipe._id)}
                    disabled={isRecipeSaved(recipe._id)}
                  >
                    {isRecipeSaved(recipe._id) ? "Saved!" : "Save this!"}
                  </button>
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
                <img className="w-90" src={recipe.imageUrl} alt={recipe.name} />
                <p className="p-2">{recipe.cookingTime} (minutes)</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Home;
