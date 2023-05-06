import React, { useState } from "react";
import Register from "../components/auth/register";
import Login from "../components/auth/login";

function Auth() {
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
}

export default Auth;
