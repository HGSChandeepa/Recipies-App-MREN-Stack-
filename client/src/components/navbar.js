import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  //the access token
  const [cookie, setCookie] = useCookies(["access-token"]);
  //navigate
  const navigate = useNavigate();

  //logot
  const logout = () => {
    //remove the cookie
    setCookie("access-token", "");
    //clear the local storage
    window.localStorage.removeItem("userId");
    navigate("/auth");
  };
  return (
    <div className=" flex gap-8 items-center justify-center m-4 p-4 bg-green-400">
      <Link to={"/"}>Home</Link>
      {cookie["access-token"] ? (
        <>
          <Link to={"/saved-recipes"}>Saved Recipes</Link>

          <Link to={"/create-recipe"}>Create Recipe</Link>
        </>
      ) : (
        <Link to={"/auth"}>Create Recipe</Link>
      )}

      {!cookie["access-token"] ? (
        <Link to={"/auth"}>Login/Regsiter</Link>
      ) : (
        <button onClick={logout} className=" bg-yellow-400 p-4">
          Log Out
        </button>
      )}
    </div>
  );
}

export default Navbar;
