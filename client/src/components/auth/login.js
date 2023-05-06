import React, { useState } from "react";
import FormFeild from "./form";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //ccookies
  const [cookies, setCookie] = useCookies(["access-token"]);
  //navigate
  const navigate = useNavigate();

  //LOGIN METHODE
  const onSubmit = async (event) => {
    event.preventDefault();

    //here we have to send the username and password to the api and also
    //take the data of the auth token

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      //create the access token
      setCookie("access-token", response.data.token);
      //store the userid in local storage
      window.localStorage.setItem("userId", response.data.userId);
      //user name
      const userName = response.data.username;
      console.log(userName);
      navigate("/");

      //
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <FormFeild
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        formName={"Login"}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;
