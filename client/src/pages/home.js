import React from "react";
import axios from "axios";

function Home() {
  //get al the recipes and map those all recipies
  const alllRecipies = async () => {
    await axios.get("http://localhost:3001/recipes/");
  };

  return <div></div>;
}

export default Home;
