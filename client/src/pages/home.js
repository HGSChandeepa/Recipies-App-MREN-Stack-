import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [allRecipesList, setAllRecipesList] = useState([]);
  //get al the recipes and map those all recipies
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const responce = await axios.get("http://localhost:3001/recipes/");
        setAllRecipesList(responce.data);
      } catch (err) {
        console.err(err);
      }
    };
    fetchRecipes();
  }, []);
  // console.log(allRecipesList);
  return (
    <div>
      {allRecipesList.map((recipe) => {
        <h1>{recipe.name}</h1>;
      })}
    </div>
  );
}

export default Home;
