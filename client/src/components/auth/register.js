import React, { useState } from "react";
import axios from "axios";

import FormFeild from "./form";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //fetch data using axios
  const onSubmit = async (event) => {
    event.preventDefault();

    //here we have to provide the username and password to the api
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      setPassword("");
      setUsername("");
      alert("Registered! Plesae Login!");
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
        formName={"Register"}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Register;
