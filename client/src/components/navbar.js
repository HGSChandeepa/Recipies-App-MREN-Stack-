import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex gap-8 items-center justify-center m-4 p-4 bg-green-400">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/saved-recipes"}>Saved Recipes</Link>
      <Link to={"/auth"}>Login/Regsiter</Link>
    </div>
  );
}

export default Navbar;
